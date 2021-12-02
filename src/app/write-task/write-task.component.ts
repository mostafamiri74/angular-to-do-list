import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-write-task',
  templateUrl: './write-task.component.html',
  styleUrls: ['./write-task.component.scss'],
})
export class WriteTaskComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  public addTodo(text: string): void {
    this.todoService.addTodo(text);
  }
}
