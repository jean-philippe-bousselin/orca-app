import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

import { TrackService } from './track.service'
import { TrackComponent } from './track.component'
import { TrackCardComponent } from './card/track-card.component'
import { TrackFormComponent } from './form/track-form.component'
import { TrackSelector } from './trackSelector/track-selector.component'

@NgModule({
  declarations: [
    TrackComponent,
    TrackCardComponent,
    TrackFormComponent,
    TrackSelector
  ],
  exports: [
    TrackComponent,
    TrackSelector
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [
    TrackService
  ]
})
export class TracksModule {
}
