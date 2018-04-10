import { Component, OnInit} from '@angular/core';
import { Employee } from "./models/employee.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app';
  employee: Employee;
  
  constructor(){}
  
  ngOnInit(): void {
    this.employee = {
      name: 'Jun',
      nationality: 'China'
    }
  }
 



}
