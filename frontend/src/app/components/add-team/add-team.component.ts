import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from '../../services/team';
import { Team } from '../../models/models';

@Component({
    selector: 'app-add-team',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="container">
      <h2>Add Team</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label>Name</label>
          <input [(ngModel)]="team.name" name="name" required>
        </div>
        <div class="form-group">
          <label>Country</label>
          <input [(ngModel)]="team.country" name="country" required>
        </div>
        <button type="submit" [disabled]="!team.name || !team.country">Create Team</button>
      </form>
    </div>
  `,
    styles: [`
    .container { max-width: 500px; margin: 0 auto; padding: 20px; }
    .form-group { margin-bottom: 15px; }
    label { display: block; margin-bottom: 5px; font-weight: bold; }
    input { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
    button { background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; }
    button:disabled { background: #ccc; }
  `]
})
export class AddTeamComponent {
    team: Team = { name: '', country: '' };

    constructor(private teamService: TeamService, private router: Router) { }

    onSubmit() {
        this.teamService.createTeam(this.team).subscribe(() => {
            this.router.navigate(['/teams']);
        });
    }
}
