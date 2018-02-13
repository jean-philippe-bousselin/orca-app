import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ChampionshipService } from '../championship.service'
import { SessionType } from "../../sessions/sessionType.model"
import { Championship } from "../championship.model"

import { ToastService } from "../../shared/toast/toast.service"

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
  private championshipId : number
  private sub: any

  constructor(
    private championshipService: ChampionshipService,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.championshipId = +params['championshipId']
      this.championshipService.getConfiguration(this.championshipId).subscribe(
        configuration => this.loadConfig(configuration),
        error => console.log(error)
      )
   })
  }

  loadConfig(configuration) {
    if(configuration.sessionTypes.length > 0) {
      this.sessionTypes = configuration.sessionTypes
    } else {
      this.sessionTypes = [this.createEmptyType()]
    }

    this.subclasses = []
    this.currentSubclass = ""
  }

  createEmptyType() : SessionType {
    let type = new SessionType()
    type.id = 0
    type.name = "Default " + (this.sessionTypes? this.sessionTypes.length + 1 : "")
    type.points = [0,0,0,0,0,0,0,0,0,0]
    type.incidentsLimit = 0
    type.penaltyPoints = 0
    type.bonusPoints = 0
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
    this.championshipService.configure(this.championshipId, configuration).subscribe(
      response => this.configSuccess(response),
      error => this.configError(error)
    )
  }

  configSuccess(response) {
    this.savingConfiguration = false
    this.sessionTypes = response.sessionTypes
    this.toastService.add("Configuration saved!", this.toastService.TYPE_SUCCESS)
  }
  configError(error) {
    console.log(error)
    this.savingConfiguration = false
    this.toastService.add("An error has occured, we couldn't save the configuration.", this.toastService.TYPE_ERROR)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
