import { Driver } from "../championship/driver.model"

export class Result {

  id: number
  position: number
  classPosition: number
  classCar: string
  carNumber: string
  driver: Driver
  startPosition: number
  interval: string
  lapsLed: number
  averageLap: string
  fastestLap: string
  fastestLapNumber: number
  totalLaps: number
  incidents: number
  club: string
  points: number
  bonusPoints: number
  penaltyPoints: number
  finalPoints: number

  constructor() {}

}
