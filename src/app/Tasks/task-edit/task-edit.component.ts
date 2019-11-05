import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Task} from "../Models/Task";
import {TasksService} from "../tasks.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../Models/Project";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  //isEdit:boolean=true;
  task:Task=this.tasksService.selectedTask;
  taskForm:FormGroup;
  taskIndex:number;
  projects:Project[];

  constructor(private tasksService:TasksService,private activatedRoute:ActivatedRoute,private router:Router) {



    this.taskIndex=this.activatedRoute.snapshot.params['id'];

    console.log(this.taskIndex);
    this.tasksService.getTasks().subscribe(
      (response)=>{
        console.log(response)
        this.task=response[this.taskIndex];
        console.log(this.task);
      }
    );

  }

  ngOnInit() {

    this.taskForm=new FormGroup({
      title:new FormControl(this.task.Title,Validators.required),
      assignee:new FormControl(this.task.AssigneeName,Validators.required),
      date:new FormControl(this.task.DeliveryDate,Validators.required),
      details:new FormControl(this.task.Details,Validators.required),
      ProjectId:new FormControl(this.task.ProjectId)
    });
    this.tasksService.getProjects().subscribe(
      (response)=>this.projects=response //console.log("Task Details : "+response[2])
    );
  }

  onSubmit(){
        if(this.taskForm.value!=null){
          //console.log(this.taskForm.value);
          this.tasksService.EditTask(this.taskForm.value).subscribe(
            (response)=>console.log(response)
          );
          this.router.navigate(['../../'],{relativeTo:this.activatedRoute});
        }
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.activatedRoute});
  }
}
