import { Competitor } from "./competitor.model"

export class Standing {

  id: number
  position: number
  competitor: Competitor
  behindNext: number
  bonusPoints: number
  penaltyPoints: number
  starts: number
  wins: number
  poles: number
  top5s: number
  top10s: number
  incidents: number
  corners: number
  incPerRace: number
  incPerLap: number
  incPerCorner: number
  points : number

  constructor() {}

}
