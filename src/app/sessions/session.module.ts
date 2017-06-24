import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { SessionService } from "./session.service"
import { SessionFormComponent } from "./form/session-form.component"
import { CreateSessionComponent } from "./create/create-session.component"
import { SessionCardComponent } from "./card/session-card.component"
import { SessionListComponent } from "./list/session-list.component"
import { SessionComponent } from "./session.component"
import { SessionMenuComponent } from "./menu/menu.component"

import { TracksModule } from '../tracks/track.module'

@NgModule({
  declarations: [
    SessionFormComponent,
    CreateSessionComponent,
    SessionCardComponent,
    SessionListComponent,
    SessionComponent,
    SessionMenuComponent
  ],
  exports: [
    CreateSessionComponent,
    SessionListComponent,
    SessionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    TracksModule
  ],
  providers: [
    SessionService
  ]
})
export class SessionModule {}
