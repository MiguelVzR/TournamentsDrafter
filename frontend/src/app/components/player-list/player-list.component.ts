import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../services/player';
import { Player } from '../../models/models';

@Component({
    selector: 'app-player-list',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container">
      <h2>Players</h2>
      <div class="grid">
        <div *ngFor="let player of players" class="card">
          <h3>{{ player.name }}</h3>
          <p>{{ player.position }}</p>
          <small>Team ID: {{ player.teamId }}</small>
        </div>
      </div>
      <div *ngIf="players.length === 0" class="empty-state">
        No players found. Add one!
      </div>
    </div>
  `,
    styles: [`
    .container { padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
    .card { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .empty-state { text-align: center; color: #666; margin-top: 40px; }
  `]
})
export class PlayerListComponent implements OnInit {
    players: Player[] = [];

    constructor(private playerService: PlayerService) { }

    ngOnInit(): void {
        this.loadPlayers();
    }

    loadPlayers() {
        this.playerService.getPlayers().subscribe(data => this.players = data);
    }
}
