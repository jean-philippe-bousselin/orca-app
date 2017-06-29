import { Component, OnInit, Input} from '@angular/core';
import { Session } from '../session.model'
import { Result } from '../result.model'
import { SessionService } from '../session.service'

@Component({
  selector: 'session-results',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class SessionResultsComponent implements OnInit {

  @Input() session: Session

  private results: Result[]

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.results = this.session.results
    console.log(this.results)
  }

}
