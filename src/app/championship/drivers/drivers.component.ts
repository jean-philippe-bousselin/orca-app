import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Championship } from '../championship.model'
import { ChampionshipService } from '../championship.service'
import { Driver } from '../driver.model'
import { Team } from '../team.model'

@Component({
  selector: 'drivers',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class DriversComponent implements OnInit {

  private sub: any
  private championshipIdSub: any
  private championshipId: number
  private drivers: Driver[]
  private filteredDrivers: Driver[]
  private searchString: string

  private teams: Team[]
  private categories: string[] = [
    'PRO', 'AM', 'ALL'
  ]
  constructor(
    private championshipService: ChampionshipService,
    private route: ActivatedRoute
  ) {}

  filterDrivers() {
    this.filteredDrivers = this.drivers.filter((driver) => driver.name.toLowerCase().indexOf(this.searchString.toLowerCase()) != -1)
  }

  ngOnInit() {
    this.drivers = []
    this.teams = []
    this.filteredDrivers = []
    this.searchString = ""
    this.sub = this.route.params.subscribe(params => {
      this.championshipId = +params['championshipId']
   })

   this.championshipIdSub = this.route.parent.params.subscribe(params => {
     this.championshipId = +params['championshipId']
     this.championshipService.getTeams(this.championshipId).subscribe(
       teams => this.teams = teams,
       error => console.log(error)
     )
     this.championshipService.getDrivers(this.championshipId).subscribe(
       drivers => this.onSuccess(drivers),
       error => console.log(error)
     )
   })
  }

  onSuccess(drivers: Driver[]) {
    this.drivers = drivers
    this.filteredDrivers = drivers
  }

  driverHasTeam(team: Team, driverTeam: Team) {
    if(team && driverTeam) {
      return team.id === driverTeam.id;
    } else {
      return false
    }
  }

  updateDriver(driver: Driver) {
    this.championshipService.updateDriver(this.championshipId, driver).subscribe(
      driver => console.log(driver),
      error => console.log(error)
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
    this.championshipIdSub.unsubscribe()
  }

}
