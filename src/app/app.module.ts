import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WriteTaskComponent } from './write-task/write-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [AppComponent, WriteTaskComponent, ShowTaskComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
