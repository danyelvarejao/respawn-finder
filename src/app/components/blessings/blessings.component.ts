import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { CharacterResponse } from 'src/app/@types/api/character';

import { API_VERSION } from 'src/constants';
import { TIBIA_DATA_API_URL } from 'src/constants';

import { blessings } from 'src/data';
import { Blessing } from 'src/types';
import { getBlessingCost } from 'src/utils/blessings';

const MAX_LEVEL = 9999;

interface BlessingComponent extends Blessing {
  selected: boolean;
}

interface SharedExperience {
  min: number;
  max: number;
}

@Component({
  selector: 'app-blessings',
  templateUrl: './blessings.component.html',
  styleUrls: ['./blessings.component.scss'],
})
export class BlessingsComponent implements OnInit {
  public readonly characterNameInput = new Subject<string>();
  public loadingCharacter = false;

  public blessings: BlessingComponent[] = [];
  public level?: number;
  public buyingFromHenricus = true;
  public totalPrice = 0;

  public sharedExperience: SharedExperience | null = null;

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.characterNameInput.pipe(debounceTime(300)).subscribe(value => {
      if (!value || value.length === 0) {
        return;
      }

      this.loadingCharacter = true;

      this.http
        .get<CharacterResponse>(
          `${TIBIA_DATA_API_URL}/${API_VERSION}/character/${value}`
        )
        .subscribe({
          next: response => {
            this.loadingCharacter = false;

            this.level = response.character.character.level;
            this.calculateTotalPrice();
            this.calculateSharedExperience();
          },
          error: () => {
            this.loadingCharacter = false;
          },
        });
    });

    blessings.map(blessing => {
      this.blessings.push({
        ...blessing,
        selected: true,
      });
    });

    this.calculateTotalPrice();
    this.calculateSharedExperience();
  }

  handleChangeCharacterName(value: string) {
    this.characterNameInput.next(value);

    this.calculateTotalPrice();
    this.calculateSharedExperience();
  }

  handleChangeLevel(value: string) {
    const level = +value;
    if (!level || level <= 0 || level > MAX_LEVEL) {
      return;
    }

    this.level = level;

    this.calculateTotalPrice();
    this.calculateSharedExperience();
  }

  handleToggleSelectedBlessing(blessing: BlessingComponent) {
    blessing.selected = !blessing.selected;

    this.calculateTotalPrice();
  }

  handleToggleBuyingFromHenricus() {
    this.buyingFromHenricus = !this.buyingFromHenricus;

    this.calculateTotalPrice();
  }

  getBlessingCost(blessing: Blessing) {
    let blessingCost = getBlessingCost(blessing, this.level || 8);
    if (this.buyingFromHenricus && blessing.type === 'regular') {
      blessingCost *= 1.1;
    }
    return blessingCost;
  }

  private calculateTotalPrice() {
    this.totalPrice = this.blessings.reduce((total, blessing) => {
      if (blessing.selected) {
        return total + this.getBlessingCost(blessing);
      }
      return total;
    }, 0);
  }

  private calculateSharedExperience() {
    if (!this.level || this.level <= 0 || this.level > MAX_LEVEL) {
      this.sharedExperience = null;
      return;
    }

    const min = Math.ceil((this.level / 3) * 2);
    const max = Math.floor((this.level / 2) * 3);

    this.sharedExperience = { min, max };
  }
}
