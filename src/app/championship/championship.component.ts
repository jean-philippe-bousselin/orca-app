import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Championship } from './championship.model'
import { ChampionshipService } from './championship.service'
import 'rxjs/add/operator/do';

@Component({
  selector: 'championship',
  templateUrl: './championship.html'
})
export class ChampionshipComponent implements OnInit, OnDestroy {

  private championshipId: number
  private championship: Championship
  private sub: any

  constructor(
    private championshipService: ChampionshipService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.championshipId = +params['championshipId']

      this.championshipService.find(this.championshipId).subscribe(
        championship => this.init(championship),
        error => console.log(error)
      )
    })
  }

  init(championship: Championship) {
    this.championshipService.currentChampionship = championship
    this.championship = championship
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
