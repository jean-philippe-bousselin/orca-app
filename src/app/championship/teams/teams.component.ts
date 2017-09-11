import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Championship } from '../championship.model'
import { ChampionshipService } from '../championship.service'
import { Team } from '../team.model'

@Component({
  selector: 'teams',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class TeamsComponent implements OnInit {

  private sub: any
  private championshipIdSub: any
  private championshipId: number
  private teams: Team[]
  private filteredTeams: Team[]
  private searchString: string

  private newTeamName: string

  constructor(
    private championshipService: ChampionshipService,
    private route: ActivatedRoute
  ) {}

  filterTeams() {
    this.filteredTeams = this.teams.filter((team) => team.name.toLowerCase().indexOf(this.searchString.toLowerCase()) != -1)
  }

  ngOnInit() {
    this.teams = []
    this.filteredTeams = []
    this.searchString = ""
    this.sub = this.route.params.subscribe(params => {
      this.championshipId = +params['championshipId']
   })

   this.championshipIdSub = this.route.parent.params.subscribe(params => {
     this.championshipId = +params['championshipId']
     this.championshipService.getTeams(this.championshipId).subscribe(
       teams => this.onSuccess(teams),
       error => console.log(error)
     )
   })
  }

  onSuccess(teams: Team[]) {
    this.teams = teams
    this.filteredTeams = teams
    this.newTeamName = ""
  }

  addTeam() {
    if(this.newTeamName == "") {
      return false
    }
    this.championshipService.addTeam(this.championshipId, this.newTeamName).subscribe(
      team => this.onSuccess(this.teams.concat([team])),
      error => console.log(error)
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
    this.championshipIdSub.unsubscribe()
  }

}
