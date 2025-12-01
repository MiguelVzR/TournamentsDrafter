import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    template: `
    <div class="app-container">
      <nav class="navbar">
        <div class="brand">Teams & Players</div>
        <div class="links">
          <a routerLink="/teams" routerLinkActive="active">Teams</a>
          <a routerLink="/teams/add" routerLinkActive="active">Add Team</a>
          <a routerLink="/players" routerLinkActive="active">Players</a>
          <a routerLink="/players/add" routerLinkActive="active">Add Player</a>
        </div>
      </nav>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
    styles: [`
    .app-container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f7f6; min-height: 100vh; }
    .navbar { background: #333; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .brand { font-size: 1.5rem; font-weight: bold; color: #00d2ff; }
    .links a { color: #ddd; text-decoration: none; margin-left: 20px; transition: color 0.3s; }
    .links a:hover, .links a.active { color: #fff; border-bottom: 2px solid #00d2ff; }
    .content { padding: 2rem; max-width: 1200px; margin: 0 auto; }
  `]
})
export class AppComponent {
    title = 'teams-players-app';
}
