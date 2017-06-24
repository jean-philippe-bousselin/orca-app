import { NgModule } from '@angular/core'

import { OverlayLoaderComponent } from "./overlay-loader/overlay-loader.component"
import { FileUploadComponent } from "./file-upload/file-upload.component.ts"

@NgModule({
  declarations: [
    OverlayLoaderComponent,
    FileUploadComponent
  ],
  exports: [
    OverlayLoaderComponent,
    FileUploadComponent
  ],
  imports: [
  ],
  providers: []
})
export class SharedModule {}
