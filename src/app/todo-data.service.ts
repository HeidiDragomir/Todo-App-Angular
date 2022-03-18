import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todos: Todo[] = [];

  constructor() { }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }
}
