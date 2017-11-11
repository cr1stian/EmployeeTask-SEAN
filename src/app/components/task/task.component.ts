import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  TaskTotal: number;
  banana: any;
  task1: any;
  task2: any;
  task3: any;
  task4: any;
  employeeA:any[]

  hide1:boolean = false;
  hide2:boolean = false;
  hide3:boolean = false;
  hide4:boolean = false;


  show1(){
    this.hide1 = !this.hide1;
  }
  show2(){
    this.hide2 = !this.hide2;
  }
  show3(){
    this.hide3 = !this.hide3;
  }
  show4(){
    this.hide4 = !this.hide4;
  }





  assignA(event, name){
    const body = {name: `${name.target.name}`}

    console.log(name.target.name)
    this.http.post(`http://localhost:3000/assign/${event.target.value}`, this.banana, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  }).subscribe()
  }

  // assignB(event, task){
  //   this.dataService.addTaskB(task);
  //   this.http.post(`http://localhost:3000/employee/${event.target.name}`, this.taskName).subscribe();
  // }
  // assignC(event, task){
  //   this.dataService.addTaskC(task);
  //   this.http.post(`http://localhost:3000/employee/${event.target.name}`, this.taskName).subscribe();
  // }
  //


  constructor(
    private http: HttpClient,
    public dataService:DataService
  ) {}


  ngOnInit(): void {
    this.TaskTotal = 4;

    this.http.get('http://localhost:3000/task1').subscribe(data => {
      console.log('This One Here!!!!'+data)
      return this.task1 = data;
    });
    this.http.get('http://localhost:3000/task2').subscribe(data => {
      return this.task2 = data;
    });
    this.http.get('http://localhost:3000/task3').subscribe(data => {
      return  this.task3 = data;
    });
    this.http.get('http://localhost:3000/task4').subscribe(data => {
      return this.task4 = data;
    });






  }
}
