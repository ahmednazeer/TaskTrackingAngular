import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";
import {Task} from "../Models/Task";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks:Task [];
  constructor(private tasksService:TasksService,private router:Router,private activatedRout:ActivatedRoute) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(
      (response)=>{
        console.log(response)
        this.tasks=response;
      }
    );
  }

  OnTaskClicked(task: Task,index) {
    //console.log(this.tasks[index]);
    //this.tasksService.taskSubject.next(this.tasks[index]);
    this.tasksService.selectedTask=this.tasks[index];
    this.router.navigate([index],{relativeTo:this.activatedRout});
  }
}
