import { Track } from "../tracks/track.model"
import { SessionType } from "./sessionType.model"
import { Result } from "./result.model"

export class Session {

  id: number
  name: string
  date: string
  time: string
  results: Result[]
  track: Track
  sessionType: SessionType

  constructor() {}

}
