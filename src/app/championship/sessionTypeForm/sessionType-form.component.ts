import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'

import { SessionType } from "../../sessions/sessionType.model"

@Component({
  selector: 'session-type-form',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class SessionTypeFormComponent {

  private sessionTypeValue: SessionType = new SessionType()
  private isHidden: boolean = true

  @Output() sessionTypeChange = new EventEmitter()

  @Input()
  get sessionType() {
    return this.sessionTypeValue
  }
  set sessionType(sessionType: SessionType) {
    this.sessionTypeValue = sessionType
    this.sessionTypeChange.emit(this.sessionTypeValue)
  }

  addPointRow() {
    this.sessionTypeValue.points.push(0)
  }

  addPoint(pointsIndex, $event) {
    this.sessionTypeValue.points[pointsIndex] = parseInt($event.target.value)
  }

  deletePointRow(pointsIndex: number) {
    this.sessionTypeValue.points.splice(pointsIndex, 1)
  }

  toggle() {
    this.isHidden = !this.isHidden
  }

  trackByIndex(index: number, obj: any): any {
    return index
  }

}
