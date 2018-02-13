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
  private championshipId: number
  
  category: string
  standings: Standing[]
  filteredStandings: Standing[]

  constructor(
    private championshipService: ChampionshipService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.standings = []

    this.sub = this.route.params.subscribe(params => {
      this.championshipId = +params['championshipId']
      this.category = params['category']
      this.filterStandings()
   })

   this.championshipIdSub = this.route.parent.params.subscribe(params => {
     this.championshipId = +params['championshipId']
     this.championshipService.getDriverStandings(this.championshipId).subscribe(
       standings => {
         this.standings = standings
         this.filterStandings()
       },
       error => console.log(error)
     )
   })
  }

  private filterStandings() {
    this.filteredStandings = this.standings.filter((standing) => {
      if(this.category === 'all') {
        return true
      }
      return standing.competitor.category.name.toLowerCase() === this.category.toLowerCase()
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
    this.championshipIdSub.unsubscribe()
  }


}
