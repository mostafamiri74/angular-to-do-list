import { Component, OnInit } from '@angular/core';
import { ITodo } from '../todo.interface';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss'],
})
export class ShowTaskComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  public todos: ITodo[] = this.todoService.todos;

  ngOnInit(): void {}

  public removeTodo(e: any): void {
    this.todoService.removeTodo(e);
  }

  public completeTodo(e: any): void {
    this.todoService.completeTodo(e);
  }
}
