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

  handleChangeInput(input: string) {
    this.huntData = calculateHuntData(input);
  }

  async copyTransferToClipboard(transaction: PartyTransaction<string>) {
    const text = `transfer ${transaction.amount} to ${transaction.to}`;

    await navigator.clipboard.writeText(text);

    this.toastService.success(`Transfer successfully copied.`);
  }
}
