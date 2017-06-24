import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { MdToolbarModule } from '@angular/material'
import { MdSidenavModule } from '@angular/material'
import { MdCardModule } from '@angular/material'
import { MdButtonModule } from '@angular/material'
import { MaterialModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdSidenavModule,
    MdCardModule,
    MdButtonModule,
    MaterialModule,
    MdProgressSpinnerModule
  ],
  exports: [
    BrowserModule,
    MdToolbarModule,
    MdSidenavModule,
    MdCardModule,
    MdButtonModule,
    MaterialModule,
    MdProgressSpinnerModule
  ]
})
export class MaterializeToolboxModule {}
