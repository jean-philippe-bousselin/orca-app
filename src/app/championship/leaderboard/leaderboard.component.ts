import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Standing } from "../standing.model"
import { ChampionshipService } from '../championship.service'

@Component({
  selector: 'leaderboard',
  templateUrl: './template.html'
})
export class ChampionshipLeaderboardComponent implements OnInit, OnDestroy  {

  private sub: any
  private championshipIdSub: any
  private category: string
  private championshipId: number
  private standings: Standing[]

  constructor(
    private championshipService: ChampionshipService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.standings = []
    
    this.sub = this.route.params.subscribe(params => {
      this.championshipId = +params['championshipId']
      this.category = params['category']
   })

   this.championshipIdSub = this.route.parent.params.subscribe(params => {
     this.championshipId = +params['championshipId']
     this.championshipService.getStandings(this.championshipId).subscribe(
       standings => this.standings = standings,
       error => console.log(error)
     )
   })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
    this.championshipIdSub.unsubscribe()
  }


}
