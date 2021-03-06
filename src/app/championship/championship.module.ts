import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'
import { ChampionshipComponent } from './championship.component'
import { ChampionshipCardComponent } from './card/championship-card.component'
import { ChampionshipListComponent } from './list/championship-list.component'
import { ChampionshipFormComponent } from './form/championship-form.component'
import { CreateChampionshipComponent } from './create/create-championship.component'
import { ChampionshipMenuComponent } from './menu/menu.component'
import { ChampionshipService } from './championship.service'
import { ChampionshipLeaderboardComponent } from './leaderboard/leaderboard.component'
import { ChampionshipSettingsComponent } from './settings/settings.component'
import { DriversComponent } from './drivers/drivers.component'
import { TeamsComponent } from './teams/teams.component'
import { SessionTypeFormComponent } from "./sessionTypeForm/sessionType-form.component";
import { LeaderboardTeamsComponent } from './leaderboard/leaderboard-teams/leaderboard-teams.component'

@NgModule({
  declarations: [
    ChampionshipComponent,
    ChampionshipCardComponent,
    ChampionshipListComponent,
    CreateChampionshipComponent,
    ChampionshipFormComponent,
    ChampionshipMenuComponent,
    ChampionshipLeaderboardComponent,
    ChampionshipSettingsComponent,
    SessionTypeFormComponent,
    DriversComponent,
    TeamsComponent,
    LeaderboardTeamsComponent
  ],
  exports: [
    ChampionshipCardComponent,
    ChampionshipListComponent,
    CreateChampionshipComponent,
    ChampionshipFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    ChampionshipService
  ]
})
export class ChampionshipModule {
}
