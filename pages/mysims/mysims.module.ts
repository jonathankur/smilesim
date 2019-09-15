import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MysimsPage } from './mysims';

@NgModule({
  declarations: [
    MysimsPage,
  ],
  imports: [
    IonicPageModule.forChild(MysimsPage),
  ],
})
export class MysimsPageModule {}
