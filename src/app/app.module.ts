import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

import { ChampionshipModule } from './championship/championship.module'
import { TracksModule } from './tracks/track.module'
import { SessionModule } from "./sessions/session.module"
import { SharedModule } from "./shared/shared.module"

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ChampionshipModule,
    TracksModule,
    SessionModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: []
})
export class AppModule {}
