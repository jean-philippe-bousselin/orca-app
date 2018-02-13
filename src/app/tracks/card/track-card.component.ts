import { Component, Input } from '@angular/core';
import { Track } from '../track.model'
@Component({
  selector: 'track-card',
  templateUrl: './track-card.html'
})
export class TrackCardComponent {

  @Input() track: Track
  @Input() hideButtons: boolean = true

  constructor() {}

}
