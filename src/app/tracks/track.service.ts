import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Track } from './track.model'

@Injectable()
export class TrackService {

  private apiUrl = 'http://localhost:9000/tracks'

  constructor (private http: Http) {}

  find(id: number): Observable<Track> {
    return this.http.get(this.apiUrl + '/' + id).map(this.extractData)
  }
  getAll(): Observable<Track[]> {
    return this.http.get(this.apiUrl).map(this.extractData)
  }
  create(track: Track): Observable<Track> {
    return this.http.post(this.apiUrl, track).map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json()
    return body || { }
  }

}
