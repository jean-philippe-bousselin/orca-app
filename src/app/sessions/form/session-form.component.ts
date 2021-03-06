import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Session } from '../session.model'
import { Track } from "../../tracks/track.model"
import { SessionType } from "../sessionType.model"

@Component({
  selector: 'session-form',
  templateUrl: './session-form.html'
})
export class SessionFormComponent implements OnInit {

  @Input() championshipId: number
  @Input() session: Session
  @Output() onSend: EventEmitter<Session> = new EventEmitter()
  @ViewChild('sessionForm') sessionForm: NgForm

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if(this.sessionForm.valid) {
      this.onSend.emit(this.session)
    }
  }

  selectTrack(track: Track) {
    this.session.track = track
  }

  selectType(type: SessionType) {
    this.session.sessionType = type
  }

}
