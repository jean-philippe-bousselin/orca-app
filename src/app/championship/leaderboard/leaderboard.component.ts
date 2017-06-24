import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ChampionshipService } from '../championship.service'

@Component({
  selector: 'leaderboard',
  templateUrl: './template.html'
})
export class ChampionshipLeaderboardComponent implements OnInit, OnDestroy  {

  private sub: any
  private category: string

  constructor(
    private championshipService: ChampionshipService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.category = params['category']
   })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
