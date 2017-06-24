import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { TrackService } from './track.service'
import { Track } from './track.model'

@Component({
  selector: 'track',
  templateUrl: './track.html',
  styleUrls: ['./track.css']
})
export class TrackComponent implements OnInit {

  private tracks : Array<Track>

  constructor(
    private trackService: TrackService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tracks = []
    this.trackService.getAll().subscribe(
      tracks => this.tracks = tracks,
      error => console.log(error)
    )
  }

  private pushTrack(track: Track) {
    console.log(track)
    this.tracks.push(track)
  }

}
