import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';

import { TaskService } from './services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './components/employee/employee.component';
import { AssignedComponent } from './components/assigned/assigned.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EmployeeComponent,
    AssignedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }