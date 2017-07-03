import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Session } from './session.model'
import { Result } from "./result.model"
import { SessionType } from './sessionType.model'
import { RCMService } from '../shared/RCMService.abstract'

@Injectable()
export class SessionService extends RCMService {

  // @TODO add config for url
  private apiUrl = 'http://localhost:9000'

  constructor (private http: Http) {
    super()
  }

  find(id: number): Observable<Session> {
    return this.http
      .get(this.apiUrl + '/sessions/' + id)
      .map(this.extractData)
  }

  getResults(id: number): Observable<Result[]> {
    return this.http
      .get(this.apiUrl + '/sessions/' + id + '/results')
      .map(this.extractData)
  }

  getAll(championshipId: number): Observable<Session[]> {
    return this.http
      .get(this.apiUrl + "/championships/" + championshipId + '/sessions')
      .map(this.extractData)
  }
  create(championshipId: number, session: Session): Observable<Session> {
    return this.http.post(
      this.apiUrl + "/championships/" + championshipId + '/sessions',
      session
    ).map(this.extractData)
  }
  getSessionTypes(championshipId: number) : Observable<SessionType[]> {
    return this.http
      .get(this.apiUrl + '/championships/' + championshipId + '/session-types')
      .map(this.extractData)
  }

}
