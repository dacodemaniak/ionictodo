import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddTodoPage } from './../pages/add-todo/add-todo';
import { TodoDetailPageModule } from './../pages/todo-detail/todo-detail.module';
import { LocalTodoProvider } from '../providers/local-todo/local-todo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddTodoPage
  ],
  imports: [
    BrowserModule,
    TodoDetailPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddTodoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalTodoProvider
  ]
})
export class AppModule {}
