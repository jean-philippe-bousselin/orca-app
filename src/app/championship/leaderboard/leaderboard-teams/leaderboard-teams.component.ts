import { TeamStanding } from './../../teamStanding.model';
import { ActivatedRoute } from '@angular/router';
import { ChampionshipService } from './../../championship.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'leaderboard-teams',
  templateUrl: './leaderboard-teams.component.html',
  styleUrls: ['./leaderboard-teams.component.scss']
})
export class LeaderboardTeamsComponent implements OnInit {

  private championshipIdSub: any
  private championshipId: number

  standings: TeamStanding[]

  constructor(
    private championshipService: ChampionshipService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.standings = []
    this.championshipIdSub = this.route.parent.params.subscribe(params => {
      this.championshipId = +params['championshipId']
      this.championshipService.getTeamStandings(this.championshipId).subscribe(
        standings => {
          this.standings = standings
        },
        error => console.log(error)
      )
    })

  }

  
  ngOnDestroy() {
    this.championshipIdSub.unsubscribe()
  }

}
