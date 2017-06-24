import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { ChampionshipComponent } from './championship.component'
import { ChampionshipCardComponent } from './card/championship-card.component'
import { ChampionshipListComponent } from './list/championship-list.component'
import { ChampionshipFormComponent } from './form/championship-form.component'
import { CreateChampionshipComponent } from './create/create-championship.component'
import { ChampionshipMenuComponent } from './menu/menu.component.ts'
import { ChampionshipService } from './championship.service'
import { ChampionshipLeaderboardComponent } from './leaderboard/leaderboard.component'

@NgModule({
  declarations: [
    ChampionshipComponent,
    ChampionshipCardComponent,
    ChampionshipListComponent,
    CreateChampionshipComponent,
    ChampionshipFormComponent,
    ChampionshipMenuComponent,
    ChampionshipLeaderboardComponent
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
    RouterModule
  ],
  providers: [
    ChampionshipService
  ]
})
export class ChampionshipModule {
}
