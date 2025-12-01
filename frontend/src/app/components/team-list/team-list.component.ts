import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../../services/team';
import { Team } from '../../models/models';

@Component({
    selector: 'app-team-list',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container">
      <h2>Teams</h2>
      <div class="grid">
        <div *ngFor="let team of teams" class="card">
          <h3>{{ team.name }}</h3>
          <p>{{ team.country }}</p>
        </div>
      </div>
      <div *ngIf="teams.length === 0" class="empty-state">
        No teams found. Add one!
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
export class TeamListComponent implements OnInit {
    teams: Team[] = [];

    constructor(private teamService: TeamService) { }

    ngOnInit(): void {
        this.loadTeams();
    }

    loadTeams() {
        this.teamService.getTeams().subscribe(data => this.teams = data);
    }
}
