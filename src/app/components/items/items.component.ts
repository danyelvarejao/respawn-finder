import { Component, OnInit } from '@angular/core';

import { items } from 'src/data';
import { Item, Slot } from 'src/types';

export const NOTIFY_MISSING_SECONDS = 30;
export const NOTIFY_TIMES = 3;

interface ItemComponent extends Item {
  remainingSeconds: number;
  notifiedTimes: number;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  public items: Item[] = items;

  public usedItems: ItemComponent[] = [];
  public equippedItems: Record<Slot, ItemComponent | null> = {
    amulet: null,
    helmet: null,
    backpack: null,
    weapon: null,
    armor: null,
    shield: null,
    ring: null,
    legs: null,
    arrow: null,
    boots: null,
  };

  ngOnInit() {
    setInterval(() => {
      this.usedItems.forEach(item => {
        this.decreaseRemainingSecond(item);
      });

      for (const slot in this.equippedItems) {
        const item = this.equippedItems[slot as Slot];
        if (item) {
          this.decreaseRemainingSecond(item);
        }
      }
    }, 1000);
  }

  handleSelectItem(selectedItem: Item) {
    const item: ItemComponent = {
      ...selectedItem,
      remainingSeconds: selectedItem.seconds,
      notifiedTimes: 0,
    };

    if (selectedItem.slot) {
      this.equippedItems[selectedItem.slot] = item;
    } else {
      const alreadyUsedItem = this.usedItems.find(
        element => element.name === selectedItem.name
      );
      if (alreadyUsedItem) {
        return;
      }

      this.usedItems.push(item);
    }

    this.playSound(selectedItem.audios?.used);
  }

  handleResetTimer(item: ItemComponent) {
    item.remainingSeconds = item.seconds;
    item.notifiedTimes = 0;
  }

  handleRemoveItem(selectedItem: ItemComponent, event?: MouseEvent) {
    if (event) {
      event.preventDefault();
    }

    if (selectedItem.slot) {
      this.equippedItems[selectedItem.slot] = null;
    } else {
      const index = this.usedItems.findIndex(
        element => element.name === selectedItem.name
      );
      if (index !== -1) {
        this.usedItems.splice(index, 1);
      }
    }
  }

  isFinishing(item: ItemComponent) {
    return item.remainingSeconds <= NOTIFY_MISSING_SECONDS;
  }

  private decreaseRemainingSecond(item: ItemComponent) {
    item.remainingSeconds -= 1;

    if (item.remainingSeconds > 0) {
      if (this.isFinishing(item) && item.notifiedTimes < NOTIFY_TIMES) {
        item.notifiedTimes++;
        this.playSound(item.audios?.ending);
      }
    } else {
      this.onFinishTimer(item);
    }
  }

  private playSound(fileName: string | undefined) {
    if (!fileName) {
      return;
    }

    const audio = new Audio(`../../../assets/sounds/${fileName}`);
    audio.play();
  }

  private onFinishTimer(item: ItemComponent) {
    this.handleRemoveItem(item);
    this.playSound(item.audios?.finished);
  }
}
