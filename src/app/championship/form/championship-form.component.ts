import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Championship } from '../championship.model'
import { ChampionshipService } from '../championship.service'

@Component({
  selector: 'championship-form',
  templateUrl: './championship-form.html'
})
export class ChampionshipFormComponent implements OnInit {

  championship: Championship

  @Output() onSend: EventEmitter<Championship> = new EventEmitter()
  @ViewChild('championshipForm') championshipForm: NgForm

  constructor(
    private championshipService: ChampionshipService
  ) {}

  ngOnInit() {
    this.championship = new Championship()
  }

  onSubmit() {
    if(this.championshipForm.valid) {
      this.onSend.emit(this.championship)
    }
  }
}
