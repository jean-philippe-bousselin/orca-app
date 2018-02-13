import { TeamStanding } from './teamStanding.model';
import { ToastService } from './../shared/toast/toast.service';
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Championship } from './championship.model'
import { Standing } from "./standing.model"
import { Driver } from './driver.model'
import { Team } from './team.model'

@Injectable()
export class ChampionshipService {

  private apiUrl = 'http://localhost:9000/championships'

  currentChampionship: Championship

  constructor (private http: Http, private toastService: ToastService) {}

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
  getDriverStandings(id: number): Observable<Standing[]> {
    return this.http.get(this.apiUrl + "/" + id + "/driver-standings").map(this.extractData)
  }
  getTeamStandings(id: number): Observable<TeamStanding[]> {
    return this.http.get(this.apiUrl + "/" + id + "/team-standings").map(this.extractData)
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
  updateDriver(id: number, driver: Driver): Observable<Team> {
    return this.http.put(this.apiUrl + "/" + id + "/drivers", driver).map(this.extractData)
  }
  buildStandings(id: number) {
    const toastId = this.toastService.add("Rebuilding championships")
    this.http.put(this.apiUrl + "/" + id + "/standings", {}).map(this.extractData)
    .subscribe(result => {
      this.toastService.remove(toastId)
      this.toastService.add("Standings rebuilt!", this.toastService.TYPE_SUCCESS)
    })
  }

  private extractData(res: Response) {
    let body = res.json()
    return body || { }
  }

}
