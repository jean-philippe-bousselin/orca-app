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
    console.log("upload started")
    this.importingResults = true
  }
  uploadFinshed(results) {

    console.log("upload finished", results)
    this.session.results = results.json()[0]
    this.importingResults = false
  }
  uploadError(error) {
    console.log("upload error", error)
    this.importingResults = false
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
