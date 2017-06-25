import { Component, OnInit } from '@angular/core'

import { ChampionshipService } from '../championship.service'
import { SessionType } from "../../sessions/sessionType.model"

@Component({
  selector: 'championship-settings',
  templateUrl: './template.html'
})
export class ChampionshipSettingsComponent implements OnInit {

  private sessionTypes: SessionType[]

  constructor(
    private championshipService: ChampionshipService
  ) {}

  ngOnInit() {
    let defaultType = new SessionType()
    defaultType.name = "Default"
    defaultType.points = [0,0,0,0,0,0,0,0,0,0]
    this.sessionTypes = [defaultType]
  }

  addPointRow(typesIndex: number) {
    this.sessionTypes[typesIndex].points.push(0)
  }

  deletePointRow(typesIndex: number, pointsIndex: number) {
    this.sessionTypes[typesIndex].points.splice(pointsIndex, 1)
  }

}
