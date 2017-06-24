import { Response } from '@angular/http';

export abstract class RCMService {

  constructor () {}

  extractData(res: Response) {
    let body = res.json()
    return body || { }
  }

}
