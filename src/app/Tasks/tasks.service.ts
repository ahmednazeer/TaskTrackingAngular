import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "./Models/Task";
import {Subject} from "rxjs";
import {Project} from "./Models/Project";


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:Task[];
  selectedTask:Task;
  baseUrl='https://localhost:44320/api/tasks/';
  taskSubject:Subject<Task>=new Subject<Task>();
  tasksSubject:Subject<Task[]>=new Subject<Task[]>();
  constructor(private httpClient:HttpClient) { }

   getTasks(){
    let tasks:Task[];
    return  this.httpClient.get<Task[]>(this.baseUrl+"list")
     /*.subscribe(
       (result)=>{
         this.tasks=result;
         tasks=result;
       }
     );
            console.log(tasks);
     return tasks.slice();*/
  }

  getTaskDetails(taskId:number){
    return this.httpClient.get(this.baseUrl+'details/'+taskId);
  }

  deleteTask( taskId:number){
    //this.httpClient.
    console.log(taskId);
    return  this.httpClient.delete(this.baseUrl+'remove/'+taskId);
  }

  EditTask(task:Task){
      return  this.httpClient.put(this.baseUrl+'update',task);
  }

  AddTask(task:Task){
    return this.httpClient.post(this.baseUrl+'add',task);
  }

  getProjects(){
    return this.httpClient.get<Project[]>('https://localhost:44320/api/projects/list');
  }

}
