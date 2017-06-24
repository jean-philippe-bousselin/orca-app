import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Track } from '../track.model'
import { TrackService } from '../track.service'

@Component({
  selector: 'track-form',
  templateUrl: './track-form.html'
})
export class TrackFormComponent implements OnInit {

  track: Track

  @Output() trackAdded: EventEmitter<Track> = new EventEmitter()
  @ViewChild('trackForm') trackForm: NgForm

  constructor(private trackService: TrackService) {}

  ngOnInit() {
    this.track = new Track()
  }

  success(track: Track) {
    this.trackAdded.emit(track)
    this.track = new Track()
  }
  onSubmit() {
    if(this.trackForm.valid) {
      this.trackService.create(this.track).subscribe(
        track => this.success(track),
        error => console.log('an error occured', error)
      )
    }
  }
}
