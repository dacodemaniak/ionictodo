import { AddTodoPage } from './../add-todo/add-todo';
import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';

import { ITodo } from './../../models/ITodo';
import { TodoDetailPage } from './../todo-detail/todo-detail';
import { LocalTodoProvider } from './../../providers/local-todo/local-todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**
   * Tableau des choses à faire
   */
  private todos: Array<ITodo>;

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private toaster: ToastController,
    private localTodo: LocalTodoProvider) {
    }

  /**
   * Méthode invoquée automatiquement immédiatement après le constructeur
   */
  public ionViewDidLoad() {
     this.localTodo.getTodos().then((datas) => {
       if (datas) {
         this.todos = datas;
         this.slider.update();
         this.slider.autoplay = 2500;
         this.slider.startAutoplay();
       } else {
        this.todos = new Array<ITodo>();
       }
     });
  }

  public viewTodo(todo: ITodo){
    this.navCtrl.push(
      TodoDetailPage,
      {item: todo}
    );
  }

  /**
   * Ajoute un élément à la liste des choses à faire
   * @return void
   */
  public addItem(): void {
    let modal = this.modalCtrl.create(AddTodoPage); // Création de la modale

    // Que fait-on quand la modale sera fermée ?
    modal.onDidDismiss((todo: ITodo) => {
      if (todo) {
        this.todos.push(todo);
        this.localTodo.save(this.todos);
        let toast = this.toaster.create({
          message: 'Nouvelle tâche à accomplir',
          duration: 2500,
          position: 'top'
        });
        toast.present();
      }
    });

    // Affichage de la modale
    modal.present();
  }
}
