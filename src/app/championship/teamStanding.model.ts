import { Team } from './team.model';

export class TeamStanding {

  id: number
  position: number
  team: Team
  behindNext: number
  behindLeader: number
  starts: number
  wins: number
  poles: number
  top5s: number
  top10s: number
  points : number
  bonusPoints: number
  penaltyPoints: number
  laps: number
  incidents: number
  
  constructor() {}

}
