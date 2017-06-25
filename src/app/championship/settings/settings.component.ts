import { Component, OnInit } from '@angular/core'

import { ChampionshipService } from '../championship.service'
import { SessionType } from "../../sessions/sessionType.model"
import { Championship } from "../championship.model"

@Component({
  selector: 'championship-settings',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class ChampionshipSettingsComponent implements OnInit {

  private sessionTypes: SessionType[]
  private subclasses: string[]
  private currentSubclass: string
  private savingConfiguration: boolean = false
  private championship : Championship

  constructor(
    private championshipService: ChampionshipService
  ) {}

  ngOnInit() {
    this.championship = this.championshipService.currentChampionship
    this.sessionTypes = [this.createEmptyType()]
    this.subclasses = []
    this.currentSubclass = ""
  }

  createEmptyType() : SessionType {
    let type = new SessionType()
    type.name = "Default " + (this.sessionTypes? this.sessionTypes.length + 1 : "")
    type.points = [0,0,0,0,0,0,0,0,0,0]
    type.incidentsLimit = 0
    type.penaltyPoints = 0
    return type
  }

  addType() {
    this.sessionTypes.push(this.createEmptyType())
  }

  addSubclass(name) {
    if(this.currentSubclass != "") {
      this.subclasses.push(this.currentSubclass)
      this.currentSubclass = ""
    }
  }

  saveConfig() {
    this.savingConfiguration = true
    let configuration = {
      sessionTypes: this.sessionTypes,
      subclasses: this.subclasses
    }
    this.championshipService.configure(this.championship.id, configuration).subscribe(
      response => this.configSuccess(response),
      error => this.configError(error)
    )
  }

  configSuccess(response) {
    console.log(response)
    this.savingConfiguration = false
  }
  configError(error) {
    console.log(error)
    this.savingConfiguration = false
  }

}
