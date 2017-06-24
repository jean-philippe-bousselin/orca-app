import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

import { SessionService } from '../session.service'
import { SessionType } from '../sessionType.model'

@Component({
  selector: 'session-type-selector',
  templateUrl: './template.html'
})
export class SessionTypeSelector implements OnInit {

  private types : Array<SessionType>
  private loading: boolean
  private selectedType

  @Input() championshipId: number
  @Output() onSelect: EventEmitter<SessionType> = new EventEmitter()

  constructor(private service: SessionService) {}

  ngOnInit() {
    this.loading = true
    this.types = []
    this.service.getSessionTypes(this.championshipId).subscribe(
      types => this.initialize(types),
      error => console.log(error)
    )
  }

  initialize(types: Array<SessionType>) {
    this.types = types
    this.loading = false
    this.selectedType = this.types[0]
    this.selectType(this.selectedType)
  }

  selectType(type: SessionType) {
    this.onSelect.emit(this.selectedType)
  }


}
