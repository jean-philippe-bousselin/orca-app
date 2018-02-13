import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

import { Session } from "../session.model"
import { SessionService } from "../session.service"

@Component({
  selector: 'create-session',
  templateUrl: './create-session.html'
})
export class CreateSessionComponent implements OnInit {

  private championshipId: number
  private sub: any
  private loading: boolean = false
  private session: Session

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.session = new Session()
    this.sub = this.route.parent.params.subscribe(params => {
      this.championshipId = +params['championshipId']
   })
  }

  createSession(session: Session) {
    this.loading = true
    this.sessionService.create(this.championshipId, session).subscribe(
      session => this.creationCallback(session),
      error => this.onErrorCallback(error)
    )
  }

  onErrorCallback(error) {
    console.log('an error occured', error)
    this.loading = false
  }

  creationCallback(session: Session) {
    this.router.navigate(['/championships/' + this.championshipId])
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
