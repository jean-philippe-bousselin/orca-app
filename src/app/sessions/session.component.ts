import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { SessionService } from './session.service'
import { Session } from './session.model'
import { ToastService } from "../shared/toast/toast.service"

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
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.sessionId = +params['sessionId']
      this.uploadUrl = "http://localhost:9000/sessions/" + this.sessionId + "/results"
      this.sessionService.find(this.sessionId).subscribe(
        session => this.afterInit(session),
        error => console.log(error)
      )
   })
  }

  afterInit(session: Session) {
    this.session = session
    this.sessionService.getResults(this.sessionId).subscribe(
      results => this.session.results = results,
      error => console.log(error)
    )
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
    this.toastService.add("An error has occured, results were not saved.", this.toastService.TYPE_ERROR)
    this.importingResults = false
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
