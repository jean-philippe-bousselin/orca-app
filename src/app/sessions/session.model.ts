import { Track } from "../tracks/track.model"
import { SessionType } from "./sessionType.model"

export class Session {

  id: number
  name: string
  date: string
  time: string
  track: Track
  type: SessionType

  constructor() {}

}
