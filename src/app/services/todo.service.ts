import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo} from '../models/Todo';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todosURL = 'https://jsonplaceholder.typicode.com/todos';
todosLimit = '?_limit=5';
  constructor( private  http: HttpClient) { }
  // tslint:disable-next-line:typedef
  // get todos
  getTodos(): Observable<Todo[]> {
    // @ts-ignore
  return   this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }
  // delete todo
  deleteTodo(todo: Todo): Observable<Todo>{
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
  // Add todo
  addTodo(todo: Todo): Observable<Todo> {
  return this.http.post<Todo>(this.todosURL, todo, httpOptions);
  }
  // toggle completed
  toggleCompleted(todo: Todo): Observable<any>{
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }


}
