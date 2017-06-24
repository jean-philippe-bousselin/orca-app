import { Component, OnInit, Output, EventEmitter } from '@angular/core'

import { TrackService } from '../track.service'
import { Track } from '../track.model'

@Component({
  selector: 'track-selector',
  templateUrl: './track-selector.html'
})
export class TrackSelector implements OnInit {

  private tracks : Array<Track>
  private loading: boolean
  private selectedTrack
  
  @Output() onSelect: EventEmitter<Track> = new EventEmitter()

  constructor(private trackService: TrackService) {}

  ngOnInit() {
    this.loading = true
    this.tracks = []
    this.trackService.getAll().subscribe(
      tracks => this.initialize(tracks),
      error => console.log(error)
    )
  }

  initialize(tracks: Array<Track>) {
    this.tracks = tracks
    this.loading = false
    this.selectedTrack = this.tracks[0]
    this.selectTrack(this.selectedTrack)
  }

  selectTrack(track: Track) {
    this.onSelect.emit(this.selectedTrack)
  }


}
