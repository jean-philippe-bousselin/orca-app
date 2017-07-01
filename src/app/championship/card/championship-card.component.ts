import { Component, Input } from '@angular/core';
import { Championship } from '../championship.model'
@Component({
  selector: 'championship-card',
  templateUrl: './championship-card.html',
  styleUrls: ['./style.css']
})
export class ChampionshipCardComponent {

  private defaultThumb = "http://www.donedems.com/wp-content/uploads/2017/01/Online-Car-Racing.jpg"

  @Input() championship: Championship
  @Input() hideButtons: boolean = true

  constructor() {}

  defaultThumbnail() {
    this.championship.thumbnailUrl = this.defaultThumb
  }

  getSrc() {
    return this.championship.thumbnailUrl || this.defaultThumb
  }
}
