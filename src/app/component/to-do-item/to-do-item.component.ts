import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from 'src/app/models/Todo';
import { TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private  todoService: TodoService) { }

  ngOnInit(): void {
  }
  // Set Dynamic Classes
  // tslint:disable-next-line:typedef
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  // tslint:disable-next-line:typedef
  onToggle(todo: Todo) {
    // Toggle UI
     todo.completed = !todo.completed;
    // console.log('toggle');
    // toggel on server
    // tslint:disable-next-line:no-shadowed-variable
     this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);

  }
}
