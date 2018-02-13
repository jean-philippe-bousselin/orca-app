import { Category } from './category.model';
import { Team } from './team.model';
import { Driver } from "../championship/driver.model";

export class Competitor {

  driver: Driver
  team: Team
  category: Category

}