import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BluetoothSerialPage } from './bluetooth-serial';


@NgModule({
  declarations: [
    BluetoothSerialPage,
  ],
  imports: [
    IonicPageModule.forChild(BluetoothSerialPage),
  ],
  exports: [
    BluetoothSerialPage
  ]
})
export class BluetoothSerialPageModule {}
