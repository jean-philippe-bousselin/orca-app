import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Championship } from './championship.model'

@Injectable()
export class ChampionshipService {

  private apiUrl = 'http://localhost:9000/championships'

  constructor (private http: Http) {}

  find(id: number): Observable<Championship> {
    return this.http.get(this.apiUrl + '/' + id).map(this.extractData)
  }
  getAll(): Observable<Championship[]> {
    return this.http.get(this.apiUrl).map(this.extractData)
  }
  create(championship: Championship): Observable<Championship> {
    return this.http.post(this.apiUrl, championship).map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json()
    return body || { }
  }

}
