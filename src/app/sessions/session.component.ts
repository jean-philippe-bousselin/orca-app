import { ChampionshipService } from './../championship/championship.service';
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

  private sub: any
  private champIdSub: any
  private sessionId: number
  private championshipId: number
  
  uploadUrl: string
  session: Session
  importingResults: boolean = false

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private championshipService: ChampionshipService
  ) {}

  ngOnInit() {
    this.champIdSub = this.route.parent.params.subscribe(params => {
      this.championshipId = +params['championshipId']
      console.log(this.championshipId)
    })
    this.sub = this.route.params.subscribe(params => {
      this.sessionId = +params['sessionId']

      // @TODO move url into config
      this.uploadUrl = "http://localhost:9000/sessions/" + this.sessionId + "/results"
      this.sessionService.find(this.sessionId).subscribe(
        session => this.afterInit(session),
        error => console.log(error)
      )
   })
  }

  afterInit(session: Session) {
    this.session = session
    this.session.results = []
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
    this.championshipService.buildStandings(this.championshipId)
  }
  uploadError(error) {
    console.log("upload error", error)
    this.toastService.add("An error has occured, results were not saved.", this.toastService.TYPE_ERROR)
    this.importingResults = false
  }

  sessionHasResults() {
    return this.session && this.session.results.length > 0
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.champIdSub.unsubscribe();
  }

}
