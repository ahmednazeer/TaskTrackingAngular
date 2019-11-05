import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../Models/Task";
import {Project} from "../../Models/Project";
import {TasksService} from "../../tasks.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() taskInfo:Task;
  @Input() projectInfo:Project;
  constructor(private tasksService:TasksService) { }

  ngOnInit() {
  }

  OnTaskClicked(task:Task){
      this.tasksService.taskSubject.next(task);
      //console.log(("clicked"));
  }

}
