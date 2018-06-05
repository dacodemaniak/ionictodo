import { ITodo } from './../../models/ITodo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TodoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-detail',
  templateUrl: 'todo-detail.html',
})
export class TodoDetailPage {

  public todo: ITodo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todo = this.navParams.get('item');
  }

  public hasDate(): boolean {
    return this.todo.hasOwnProperty('date') ? true : false;
  }

  ionViewDidLoad() {
  }

}
