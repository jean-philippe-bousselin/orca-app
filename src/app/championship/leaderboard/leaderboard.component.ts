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
  private filteredStandings: Standing[]

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
     this.championshipService.getStandings(this.championshipId).subscribe(
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
      return standing.driver.category.toLowerCase() === this.category.toLowerCase()
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
    this.championshipIdSub.unsubscribe()
  }


}
