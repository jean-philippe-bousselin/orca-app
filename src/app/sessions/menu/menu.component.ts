import { Component, OnInit, Input} from '@angular/core';
import { Session } from '../session.model'
import { SessionService } from '../session.service'

@Component({
  selector: 'session-menu',
  templateUrl: './menu.html'
})
export class SessionMenuComponent implements OnInit {

  @Input() session: Session

  constructor(private sessionService: SessionService) {}

  ngOnInit() {

  }

}
