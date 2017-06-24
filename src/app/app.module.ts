import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainPage } from'../pages/main/main';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register';
import { EditPage } from '../pages/edit/edit';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

export const config = {
  apiKey: "AIzaSyCvHlCrE7PuUSP_5MTgrOh5za1Pkc2apF0",
  authDomain: "claseune-a049e.firebaseapp.com",
  databaseURL: "https://claseune-a049e.firebaseio.com",
  projectId: "claseune-a049e",
  storageBucket: "claseune-a049e.appspot.com",
  messagingSenderId: "89452255117"
};

firebase.initializeApp(config)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    RegisterPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    RegisterPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
