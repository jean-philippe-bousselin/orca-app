import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
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
    RouterModule
  ],
  providers: [
    TrackService
  ]
})
export class TracksModule {
}
