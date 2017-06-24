import { Component, OnInit, Input} from '@angular/core';
import { Championship } from '../championship.model'
import { ChampionshipService } from '../championship.service'

@Component({
  selector: 'championship-menu',
  templateUrl: './menu.html'
})
export class ChampionshipMenuComponent implements OnInit {

  @Input() championship: Championship

  constructor(private championshipService: ChampionshipService) {}

  ngOnInit() {

  }

}
