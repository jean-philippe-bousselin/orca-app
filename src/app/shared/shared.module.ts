import { NgModule } from '@angular/core'

import { OverlayLoaderComponent } from "./overlay-loader/overlay-loader.component"

@NgModule({
  declarations: [
    OverlayLoaderComponent
  ],
  exports: [
    OverlayLoaderComponent
  ],
  imports: [
  ],
  providers: []
})
export class SharedModule {}
