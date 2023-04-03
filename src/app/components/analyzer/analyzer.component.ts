import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartyHuntData, PartyTransaction } from 'src/types';
import { calculateHuntData } from 'src/utils/party-hunt';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.scss'],
})
export class AnalyzerComponent {
  constructor(private readonly toastService: ToastrService) {}

  public huntData?: PartyHuntData | null;

  public huntAnalyzer = '';
  public removedPlayers: Set<string> = new Set<string>();

  handleChangeInput(input: string) {
    this.huntAnalyzer = input;

    this.removedPlayers.clear();
    this.calculateHuntData();
  }

  handleRemovePlayer(name: string) {
    if (!this.removedPlayers.has(name)) {
      this.removedPlayers.add(name);
    }

    this.calculateHuntData();
  }

  handleAddPlayer(name: string) {
    if (this.removedPlayers.has(name)) {
      this.removedPlayers.delete(name);
    }

    this.calculateHuntData();
  }

  async copyTransferToClipboard(transaction: PartyTransaction<string>) {
    const text = `transfer ${transaction.amount} to ${transaction.to}`;

    await navigator.clipboard.writeText(text);

    this.toastService.success(`Transfer successfully copied.`);
  }

  private calculateHuntData() {
    this.huntData = calculateHuntData(this.huntAnalyzer, this.removedPlayers);
  }
}
