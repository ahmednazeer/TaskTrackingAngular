import {Component, OnChanges, OnInit} from '@angular/core';
import {TasksService} from "../tasks.service";
import {Task} from "../Models/Task";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task:Task=this.tasksService.selectedTask;
  taskIndex:number;
  isSelected:boolean=false;
  constructor(private tasksService:TasksService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.taskIndex=this.activatedRoute.snapshot.params['id'];
    console.log(this.taskIndex);

    /*this.tasksService.getTasks().subscribe(
      (response)=>{
        this.task=response[this.taskIndex];
        this.isSelected=true;
        console.log(response);
      }
    );*/

  }


  ngOnInit() {
    /*this.tasksService.getTasks().subscribe(
      (response)=>{
        this.task=response[this.taskIndex];
        this.isSelected=true;
        console.log(response);
      }
    );*/

    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.taskIndex=params['id'];
        //this.task=this.tasksService.selectedTask;

        this.tasksService.getTasks().subscribe(
          (response)=>{
            this.task=response[this.taskIndex];
            this.isSelected=true;
            console.log(response);
          }
        );
      }
    );



  }

  OnEditTask(){
      this.tasksService.taskSubject.next(this.task);
      this.router.navigate(['edit'],{relativeTo:this.activatedRoute});
  }
  OnDeleteTask(){
      let taskId:number=this.task.ID;
      this.tasksService.deleteTask(taskId).subscribe(
        (result)=>{
          console.log(result);
        }
      );
      this.router.navigate(['../'],{relativeTo:this.activatedRoute});
  }

}
