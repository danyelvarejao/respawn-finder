import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { CharactersResponse } from 'src/app/@types/api/character';

import { API_VERSION } from 'src/constants';
import { TIBIA_DATA_API_URL } from 'src/constants';

import { blessings } from 'src/data';
import { Blessing } from 'src/types';
import { getBlessingCost } from 'src/utils/blessings';

interface BlessingComponent extends Blessing {
  selected: boolean;
}

@Component({
  selector: 'app-blessings',
  templateUrl: './blessings.component.html',
  styleUrls: ['./blessings.component.scss'],
})
export class BlessingsComponent implements OnInit {
  public readonly characterNameInput = new Subject<string>();

  public blessings: BlessingComponent[] = [];
  public level = 0;
  public buyingFromHenricus = true;
  public totalPrice = 0;

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.characterNameInput.pipe(debounceTime(500)).subscribe(value => {
      this.http
        .get<CharactersResponse>(
          `${TIBIA_DATA_API_URL}/${API_VERSION}/character/${value}`
        )
        .subscribe(response => {
          this.level = response.characters.character.level;
          this.calculateTotalPrice();
        });
    });

    blessings.map(blessing => {
      this.blessings.push({
        ...blessing,
        selected: true,
      });
    });

    this.calculateTotalPrice();
  }

  handleChangeCharacterName(value: string) {
    this.characterNameInput.next(value);

    this.calculateTotalPrice();
  }

  handleChangeLevel(value: string) {
    this.level = +value;

    this.calculateTotalPrice();
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
    let blessingCost = getBlessingCost(blessing, this.level);
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
}
