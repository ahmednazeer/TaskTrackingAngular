import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Project} from "../Models/Project";
import {TasksService} from "../tasks.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  addTaskForm:FormGroup;
  projects:Project[];


  constructor(private tasksService:TasksService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.addTaskForm=new FormGroup({
      title:new FormControl('',Validators.required),
      assignee:new FormControl('',Validators.required),
      date:new FormControl('',Validators.required),
      details:new FormControl('',Validators.required),
      ProjectId:new FormControl('',Validators.required)
    });
    this.tasksService.getProjects().subscribe(
      (response)=>this.projects=response //console.log("Task Details : "+response[2])
    );

  }
  onSubmit(){

      this.tasksService.AddTask(this.addTaskForm.value).subscribe(
        (respose)=>console.log(respose)
      );
    this.router.navigate(['../'],{relativeTo:this.activatedRoute});
  }

  onCancel(){
    this.addTaskForm.reset();
    this.router.navigate(['../'],{relativeTo:this.activatedRoute});
  }
}
