import { Component, OnInit, Input} from '@angular/core';
import { Employee } from "../../models/employee.interface";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor() { }

  @Input()
  employee: Employee

  ngOnInit() {
  }

}
