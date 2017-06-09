import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register';

import * as firebase from 'firebase';
import{ AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

export const config = {
  apiKey: "AIzaSyB3jqHAJ-6qVsM56FHKHzQJBFknl9Ip8Gg",
  authDomain: "capernaum2k17-c0107.firebaseapp.com",
  databaseURL: "https://capernaum2k17-c0107.firebaseio.com",
  projectId: "capernaum2k17-c0107",
  storageBucket: "capernaum2k17-c0107.appspot.com",
  messagingSenderId: "801496423905"
};

firebase.initializeApp(config)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
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
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
