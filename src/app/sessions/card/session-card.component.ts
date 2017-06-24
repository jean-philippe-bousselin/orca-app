import { Component, Input } from '@angular/core';
import { Session } from '../session.model'
@Component({
  selector: 'session-card',
  templateUrl: './session-card.html'
})
export class SessionCardComponent {

  @Input() session: Session
  @Input() showButtons: boolean = false

  constructor() {}

}
