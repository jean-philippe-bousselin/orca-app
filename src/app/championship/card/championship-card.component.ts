import { Component, Input } from '@angular/core';
import { Championship } from '../championship.model'
@Component({
  selector: 'championship-card',
  templateUrl: './championship-card.html',
  styleUrls: ['./style.css']
})
export class ChampionshipCardComponent {

  private defaultThumb = "https://porschenewsroom.s3.amazonaws.com/porsche_newsroom/motorsport/porsche-motorsport-tracktest/b-_mg_2476jpg/d34af70c-56e0-4ee8-9f2f-e2dc9abc13ce_teaser_original_720x1_5.jpg"

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
