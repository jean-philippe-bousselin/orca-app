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

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.championshipId = +params['championshipId']
   })
  }

  createSession(session: Session) {
    this.sessionService.create(this.championshipId, session).subscribe(
      session => this.router.navigate(['/championships/' + this.championshipId]),
      error => console.log('an error occured', error)
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
