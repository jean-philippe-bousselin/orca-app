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
import { ChampionshipMenuComponent } from './menu/menu.component.ts'
import { ChampionshipService } from './championship.service'
import { ChampionshipLeaderboardComponent } from './leaderboard/leaderboard.component'
import { ChampionshipSettingsComponent } from './settings/settings.component'

import { SessionTypeFormComponent } from "./sessionTypeForm/sessionType-form.component"

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
    SessionTypeFormComponent
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
