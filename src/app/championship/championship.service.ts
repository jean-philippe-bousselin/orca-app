import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Championship } from './championship.model'
import { Standing } from "./standing.model"
import { Driver } from './driver.model'
import { Team } from './team.model'

@Injectable()
export class ChampionshipService {

  private apiUrl = 'http://localhost:9000/championships'

  currentChampionship: Championship

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
  configure(id: number, configuration: Object): Observable<Championship> {
    return this.http.post(this.apiUrl + "/" + id + "/configure", configuration).map(this.extractData)
  }
  getConfiguration(id: number): Observable<any> {
    return this.http.get(this.apiUrl + "/" + id + "/configuration").map(this.extractData)
  }
  getStandings(id: number): Observable<Standing[]> {
    return this.http.get(this.apiUrl + "/" + id + "/standings").map(this.extractData)
  }
  getDrivers(id: number): Observable<Driver[]> {
    return this.http.get(this.apiUrl + "/" + id + "/drivers").map(this.extractData)
  }
  getTeams(id: number): Observable<Team[]> {
    return this.http.get(this.apiUrl + "/" + id + "/teams").map(this.extractData)
  }
  addTeam(id: number, teamName: string): Observable<Team> {
    return this.http.post(this.apiUrl + "/" + id + "/teams", {name: teamName}).map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json()
    return body || { }
  }

}
