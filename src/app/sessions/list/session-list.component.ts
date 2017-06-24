import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

import { Session } from '../session.model'
import { SessionService } from '../session.service'

@Component({
  selector: 'session-list',
  templateUrl: './session-list.html'
})
export class SessionListComponent implements OnInit {

  private championshipId: number
  private sub: any

  sessions: Array<Session>

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.championshipId = +params['championshipId']
      console.log(this.championshipId)
      this.sessionService.getAll(this.championshipId).subscribe(
        sessions => this.sessions = sessions,
        error => console.log(error)
      )
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
