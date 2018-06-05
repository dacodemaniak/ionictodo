import { ITodo } from './../../models/ITodo';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
  public titre: string;
  public contenu: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController) {
    this.titre = 'Nouveau todo';
    this.contenu = 'Contenu du nouveau todo';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTodoPage');
  }

  public saveTodo(): void {
    // Créer l'objet à transmettre à home.ts
    let todo: ITodo = {
      titre: this.titre,
      contenu: this.contenu
    };
    this.viewCtrl.dismiss(todo);
  }

  public close(): void {
    this.viewCtrl.dismiss(); // Enlève la vue courante de la pile sans rien retourner
  }
}
