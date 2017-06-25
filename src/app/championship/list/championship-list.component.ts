import { Component, OnInit } from '@angular/core';
import { Championship } from '../championship.model'
import { ChampionshipService } from '../championship.service'

@Component({
  selector: 'championship-list',
  templateUrl: './championship-list.html',
  styleUrls: ['./style.css']
})
export class ChampionshipListComponent implements OnInit {

  list: Array<Championship>

  private isLoading: boolean = false

  constructor(private championshipService: ChampionshipService) {}

  ngOnInit() {
    this.isLoading = true
    this.championshipService.getAll().subscribe(
      championships => this.list = championships,
      error => console.log(error),
      () => this.isLoading = false
    )
  }

}
