import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksListComponent } from './Tasks/tasks-list/tasks-list.component';
import { TaskItemComponent } from './Tasks/tasks-list/task-item/task-item.component';
import { TaskDetailsComponent } from './Tasks/task-details/task-details.component';
import {HttpClientModule} from "@angular/common/http";
import {TasksService} from "./Tasks/tasks.service";
import { TaskEditComponent } from './Tasks/task-edit/task-edit.component';
import {AppRoutingModule} from "./AppRoutingModule";
import {TasksComponent} from "./Tasks/tasks.component";
import {ReactiveFormsModule} from "@angular/forms";
import { NoSelectedTaskComponent } from './tasks/no-selected-task/no-selected-task.component';
import { AddTaskComponent } from './Tasks/task-add/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskItemComponent,
    TaskDetailsComponent,
    TasksComponent,
    TaskEditComponent,
    NoSelectedTaskComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}

