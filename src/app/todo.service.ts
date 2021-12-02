import { Injectable, OnInit } from '@angular/core';
import { ITodo } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnInit {
  public todos: ITodo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todos = localStorage.getItem('myTodos')
      ? JSON.parse(localStorage.getItem('myTodos') as string)
      : [];
  }

  public addTodo(text: string): void {
    if (text !== '') {
      this.todos.push({ todo: text, completed: false });
      this.updateLStorage(this.todos);
    }
  }

  private updateLStorage(todos: ITodo[]) {
    localStorage.setItem('myTodos', JSON.stringify(todos));
  }

  public removeTodo(e: any): void {
    let li = e.target.closest('.todo-li');
    let ul = e.target.closest('.todo-li').parentNode;
    let indexOfTodo = +Array.prototype.indexOf.call(ul.children, li);
    this.todos.splice(indexOfTodo, 1);
    this.updateLStorage(this.todos);
    li.remove();
  }

  public completeTodo(e: any): void {
    let li = e.target.closest('.todo-li');
    let ul = e.target.closest('.todo-li').parentNode;
    let indexOfTodo = +Array.prototype.indexOf.call(ul.children, li);
    this.todos[indexOfTodo].completed = !this.todos[indexOfTodo].completed;
    console.log(11);

    this.updateLStorage(this.todos);
  }
}
