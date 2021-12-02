import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from '@angular/router';
import { ITodo } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todolist-angular';

  ngOnInit(): void {}
}
