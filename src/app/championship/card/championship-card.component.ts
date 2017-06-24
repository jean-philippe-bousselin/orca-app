import { Component, Input } from '@angular/core';
import { Championship } from '../championship.model'
@Component({
  selector: 'championship-card',
  templateUrl: './championship-card.html',
  styleUrls: ['./style.css']
})
export class ChampionshipCardComponent {

  @Input() championship: Championship
  @Input() hideButtons: boolean = true

  constructor() {}

}
