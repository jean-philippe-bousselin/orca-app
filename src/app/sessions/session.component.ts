import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { SessionService } from './session.service'
import { Session } from './session.model'

@Component({
  selector: 'session',
  templateUrl: './session.html'
})
export class SessionComponent implements OnInit, OnDestroy {

  private uploadUrl: string
  private sessionId: number
  private session: Session
  private sub: any
  private importingResults: boolean = false

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.sessionId = +params['sessionId']
      this.uploadUrl = "http://localhost:9000/sessions/" + this.sessionId + "/results"
      this.sessionService.find(this.sessionId).subscribe(
        session => this.session = session,
        error => console.log(error)
      )
   })
  }

  uploadStarted() {
    console.log("uplad started")
    this.importingResults = true
  }
  uploadFinshed(results) {
    console.log("uplad finished", results)
    this.importingResults = false
  }
  uploadError(error) {
    console.log("uplad error", error)
    this.importingResults = false
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
