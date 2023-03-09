import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  AnalyzerData,
  AnalyzerPlayerAndTheirBalance,
  AnalyzerWhoToPayAndHowMuch,
} from 'src/types';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.scss'],
})
export class AnalyzerComponent {
  constructor(private readonly toastrService: ToastrService) {}

  public analyzerData?: AnalyzerData | null = null;

  handleChangeInput(input: string) {
    if (this.isValidAnalyzer(input)) {
      this.analyzerData = this.getAnalyzerData(input);
    } else {
      this.analyzerData = null;
    }
  }

  async copyTransferToClipboard(
    whoToPayAndHowMuch: AnalyzerWhoToPayAndHowMuch
  ) {
    const text = `transfer ${whoToPayAndHowMuch.amount} to ${whoToPayAndHowMuch.toWho}`;

    await navigator.clipboard.writeText(text);

    this.toastrService.success(`Transfer successfully copied.`);
  }

  private isValidAnalyzer(data: string) {
    if (
      data.length < 128 ||
      !data.includes('Balance') ||
      !data.includes('Supplies') ||
      !data.includes('Loot') ||
      !data.includes('Session data') ||
      !data.includes('Loot Type')
    ) {
      return false;
    }
    return true;
  }

  private getAnalyzerData(data: string): AnalyzerData {
    data = data.replace(' (Leader)', '');

    const sessionDate = this.findSessionDate(data);
    const sessionDuration = this.findSessionDuration(data);

    data = this.removeFirstSection(data);

    const numberOfPlayers = this.findTotalNumberOfPlayers(data);
    const playersAndTheirBalance = this.findPlayersAndBalance(
      data,
      numberOfPlayers
    );

    const totalProfitOrWaste = this.findTotalProfitOrWaste(
      playersAndTheirBalance
    );

    const profitOrWastePerPlayer = Math.floor(
      totalProfitOrWaste / numberOfPlayers
    );

    const whoToPayAndHowMuch = this.finalSplit(
      playersAndTheirBalance,
      profitOrWastePerPlayer,
      numberOfPlayers
    );

    return {
      sessionDate,
      sessionDuration,
      numberOfPlayers,
      playersAndTheirBalance,
      totalProfitOrWaste,
      profitOrWastePerPlayer,
      whoToPayAndHowMuch,
    };
  }

  private findSessionDate(data: string): string {
    return data.substring(19, 29);
  }

  private findSessionDuration(data: string): string {
    const index = data.indexOf('Session: ');
    return data.substring(index + 9, index + 15);
  }

  private removeFirstSection(data: string) {
    const indexOne = data.indexOf('Balance: ');
    const stringOne = data.substring(indexOne + 9);
    const indexTwo = stringOne.indexOf(' ');
    const substring2 = stringOne.substring(0, indexTwo);
    const newData = stringOne.substring(substring2.length + 1);
    return newData;
  }

  private findTotalNumberOfPlayers(data: string): number {
    const count = data.match(/Balance/g) || [];
    return count.length;
  }

  private findPlayersAndBalance(data: string, numberOfPlayers: number) {
    const playersAndTheirBalance: AnalyzerPlayerAndTheirBalance[] = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      const indexLoot = data.indexOf('Loot:');
      const playerName = data.substring(0, indexLoot).trim();
      const indexBalance = data.indexOf('Balance: ');
      const indexDamage = data.indexOf('Damage: ');
      const balance = parseInt(
        data
          .substring(indexBalance + 9, indexDamage)
          .split(',')
          .join('')
          .trim()
      );

      playersAndTheirBalance.push({
        name: playerName,
        balance: isNaN(balance) ? 0 : balance,
      });

      const indexHealing = data.indexOf('Healing: ');
      data = data.substring(indexHealing + 9);
      const indexSpace = data.indexOf(' ');
      data = data.substring(indexSpace + 1);
    }

    return playersAndTheirBalance;
  }

  private finalSplit(
    playersAndTheirBalance: AnalyzerPlayerAndTheirBalance[],
    profitOrWastePerPlayer: number,
    numberOfPlayers: number
  ) {
    const playersAndOutstandingPayment = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      const name = playersAndTheirBalance[i]['name'];
      const oustandingPayment =
        profitOrWastePerPlayer - playersAndTheirBalance[i]['balance'];
      playersAndOutstandingPayment.push({
        name: name,
        balance: oustandingPayment,
      });
    }

    const whoToPayAndHowMuch = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      if (playersAndOutstandingPayment[i]['balance'] < 0) {
        while (Math.abs(playersAndOutstandingPayment[i]['balance']) > 5) {
          for (let j = 0; j < numberOfPlayers; j++) {
            if (playersAndOutstandingPayment[j]['balance'] > 0) {
              if (
                playersAndOutstandingPayment[j]['balance'] >
                Math.abs(playersAndOutstandingPayment[i]['balance'])
              ) {
                playersAndOutstandingPayment[j]['balance'] =
                  playersAndOutstandingPayment[j]['balance'] +
                  playersAndOutstandingPayment[i]['balance'];
                whoToPayAndHowMuch.push({
                  name: playersAndOutstandingPayment[i]['name'],
                  amount: Math.abs(playersAndOutstandingPayment[i]['balance']),
                  toWho: playersAndOutstandingPayment[j]['name'],
                });
                playersAndOutstandingPayment[i]['balance'] = 0;
              } else {
                playersAndOutstandingPayment[i]['balance'] =
                  playersAndOutstandingPayment[i]['balance'] +
                  playersAndOutstandingPayment[j]['balance'];
                playersAndOutstandingPayment[j]['balance'] = Math.round(
                  playersAndOutstandingPayment[j]['balance']
                );
                whoToPayAndHowMuch.push({
                  name: playersAndOutstandingPayment[i]['name'],
                  amount: Math.abs(playersAndOutstandingPayment[j]['balance']),
                  toWho: playersAndOutstandingPayment[j]['name'],
                });
                playersAndOutstandingPayment[j]['balance'] = 0;
              }
            }
          }
        }
      }
    }
    return whoToPayAndHowMuch;
  }

  private findTotalProfitOrWaste(
    playersAndTheirBalance: AnalyzerPlayerAndTheirBalance[]
  ) {
    let totalBalance = 0;
    for (let i = 0; i < playersAndTheirBalance.length; i++) {
      totalBalance = totalBalance + playersAndTheirBalance[i]['balance'];
    }
    return totalBalance;
  }
}
