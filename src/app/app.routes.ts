import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { HomeComponent } from './home';

import { CreateChampionshipComponent } from './championship/create/create-championship.component'
import { ChampionshipComponent } from './championship/championship.component'
import { ChampionshipLeaderboardComponent } from './championship/leaderboard/leaderboard.component'
import { ChampionshipSettingsComponent } from './championship/settings/settings.component'
import { DriversComponent } from './championship/drivers/drivers.component'
import { TeamsComponent } from './championship/teams/teams.component'

import { TrackComponent } from './tracks/track.component'

import { CreateSessionComponent } from './sessions/create/create-session.component'
import { SessionListComponent } from './sessions/list/session-list.component'
import { SessionComponent } from './sessions/session.component'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tracks', component: TrackComponent },
  { path: 'new-championship', component: CreateChampionshipComponent },
  { path: 'championships/:championshipId', component: ChampionshipComponent,
    children: [
      { path: '', redirectTo: 'leaderboard/overall', pathMatch: 'full' },
      { path: 'settings', component: ChampionshipSettingsComponent },
      { path: 'leaderboard/:category', component: ChampionshipLeaderboardComponent },
      { path: 'sessions/add', component: CreateSessionComponent },
      { path: 'sessions/:sessionId', component: SessionComponent },
      { path: 'sessions', component: SessionListComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'teams', component: TeamsComponent }
    ]
  },

  { path: '**',    component: NoContentComponent },
];
