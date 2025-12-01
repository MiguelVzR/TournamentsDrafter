import { Routes } from '@angular/router';
import { TeamListComponent } from './components/team-list/team-list.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';

export const routes: Routes = [
    { path: '', redirectTo: '/teams', pathMatch: 'full' },
    { path: 'teams', component: TeamListComponent },
    { path: 'teams/add', component: AddTeamComponent },
    { path: 'players', component: PlayerListComponent },
    { path: 'players/add', component: AddPlayerComponent }
];
