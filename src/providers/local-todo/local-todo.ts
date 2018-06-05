import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ITodo } from './../../models/ITodo';

/*
  Generated class for the LocalTodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalTodoProvider {

  constructor(private storage: Storage) {
    console.log('Hello LocalTodoProvider Provider');
  }

  public getTodos(): Promise<ITodo[]> {
    return this.storage.get('todos');
  }

  public save(todos: Array<ITodo>) {
    this.storage.set('todos', todos);
  }

}
