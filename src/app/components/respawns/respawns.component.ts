import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { respawns, towns } from 'src/data';
import { Respawn, Town } from 'src/types';

@Component({
  selector: 'app-respawns',
  templateUrl: './respawns.component.html',
  styleUrls: ['./respawns.component.scss'],
})
export class RespawnsComponent {
  constructor(private toastrService: ToastrService) {}

  public towns: Town[] = towns;
  public respawns: Respawn[] = respawns;

  public searchTerm = '';
  public selectedTown?: Town;

  handleSelectTown(town: Town) {
    if (this.selectedTown == town) {
      delete this.selectedTown;
    } else {
      this.selectedTown = town;
    }

    this.handleSearchRespawns();
  }

  handleChangeSearchTerm(value: string) {
    this.searchTerm = value;

    this.handleSearchRespawns();
  }

  handleSearchRespawns() {
    const filteredRespawns: Respawn[] = [];

    respawns.map(respawn => {
      if (
        respawn.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        respawn.code.toLowerCase().includes(this.searchTerm.toLowerCase())
      ) {
        if (
          !this.selectedTown ||
          respawn.town.name === this.selectedTown.name
        ) {
          filteredRespawns.push(respawn);
        }
      }
    });

    this.respawns = filteredRespawns;
  }

  async copyToClipboard(respawn: Respawn, commandName = '') {
    const command = `!resp${commandName} ${respawn.code}`;

    await navigator.clipboard.writeText(command);

    this.toastrService.success(`Command ${command} copied successfully.`);
  }
}
