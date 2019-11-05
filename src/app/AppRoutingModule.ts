import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TasksComponent} from "./Tasks/tasks.component";
import {TaskDetailsComponent} from "./Tasks/task-details/task-details.component";
import {TaskEditComponent} from "./Tasks/task-edit/task-edit.component";
import {NoSelectedTaskComponent} from "./tasks/no-selected-task/no-selected-task.component";
import {AddTaskComponent} from "./Tasks/task-add/add-task.component";
const appRoutes:Routes=[
  {path:'',redirectTo:'/tasks',pathMatch:'full'},
  {path:'tasks',component:TasksComponent,children:[
      {path:'',component:NoSelectedTaskComponent,pathMatch:'full'},
      {path:'new',component:AddTaskComponent},
      {path:':id',component:TaskDetailsComponent},
      {path:':id/edit',component:TaskEditComponent}

    ]}
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule {

}
