import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { SessionService } from './session.service'
import { Session } from './session.model'

@Component({
  selector: 'session',
  templateUrl: './session.html'
})
export class SessionComponent implements OnInit, OnDestroy {

  private sessionId: number
  private session: Session
  private sub: any

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.sessionId = +params['sessionId']
      this.sessionService.find(this.sessionId).subscribe(
        session => this.session = session,
        error => console.log(error)
      )
   })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
