import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosimPage } from './dosim';

@NgModule({
  declarations: [
    DosimPage,
  ],
  imports: [
    IonicPageModule.forChild(DosimPage),
  ],
})
export class DosimPageModule {}
