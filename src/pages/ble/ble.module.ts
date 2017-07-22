import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlePage } from './ble';

@NgModule({
  declarations: [
    BlePage,
  ],
  imports: [
    IonicPageModule.forChild(BlePage),
  ],
  exports: [
    BlePage
  ]
})
export class BlePageModule {}
