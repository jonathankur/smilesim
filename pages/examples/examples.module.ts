import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamplesPage } from './examples';

@NgModule({
  declarations: [
    ExamplesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamplesPage),
  ],
})
export class ExamplesPageModule {}
