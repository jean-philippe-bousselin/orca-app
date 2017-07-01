import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { OverlayLoaderComponent } from "./overlay-loader/overlay-loader.component"
import { FileUploadComponent } from "./file-upload/file-upload.component.ts"
import { ToastComponent } from "./toast/toast.component"
import { ToastService } from "./toast/toast.service"

@NgModule({
  declarations: [
    OverlayLoaderComponent,
    FileUploadComponent,
    ToastComponent
  ],
  exports: [
    OverlayLoaderComponent,
    FileUploadComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ToastService
  ]
})
export class SharedModule {}
