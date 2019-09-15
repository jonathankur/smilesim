import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NopinPage } from './nopin';

@NgModule({
  declarations: [
    NopinPage,
  ],
  imports: [
    IonicPageModule.forChild(NopinPage),
  ],
})
export class NopinPageModule {}
