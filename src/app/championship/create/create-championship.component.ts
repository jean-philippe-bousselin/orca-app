import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { Championship } from '../championship.model'
import { ChampionshipService } from '../championship.service'

@Component({
  selector: 'create-championship',
  templateUrl: './create-championship.html'
})
export class CreateChampionshipComponent {

  constructor(
    private championshipService: ChampionshipService,
    private router: Router
  ) {}

  create(championship: Championship) {
    this.championshipService.create(championship).subscribe(
      championship => this.router.navigate(['/championships/' + championship.id]),
      error => console.log('an error occured', error)
    )
  }

}
