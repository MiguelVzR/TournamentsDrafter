import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player';
import { TeamService } from '../../services/team';
import { Player, Team } from '../../models/models';

@Component({
    selector: 'app-add-player',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="container">
      <h2>Add Player</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label>Name</label>
          <input [(ngModel)]="player.name" name="name" required>
        </div>
        <div class="form-group">
          <label>Position</label>
          <input [(ngModel)]="player.position" name="position" required>
        </div>
        <div class="form-group">
          <label>Team</label>
          <select [(ngModel)]="player.teamId" name="teamId" required>
            <option *ngFor="let team of teams" [value]="team.id">{{ team.name }}</option>
          </select>
        </div>
        <button type="submit" [disabled]="!player.name || !player.position || !player.teamId">Create Player</button>
      </form>
    </div>
  `,
    styles: [`
    .container { max-width: 500px; margin: 0 auto; padding: 20px; }
    .form-group { margin-bottom: 15px; }
    label { display: block; margin-bottom: 5px; font-weight: bold; }
    input, select { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
    button { background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; }
    button:disabled { background: #ccc; }
  `]
})
export class AddPlayerComponent implements OnInit {
    player: Player = { name: '', position: '', teamId: '' };
    teams: Team[] = [];

    constructor(
        private playerService: PlayerService,
        private teamService: TeamService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.teamService.getTeams().subscribe(data => this.teams = data);
    }

    onSubmit() {
        this.playerService.createPlayer(this.player).subscribe(() => {
            this.router.navigate(['/players']);
        });
    }
}
