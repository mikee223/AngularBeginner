import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees = [];
  public employeesHttp = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees_http()
    .subscribe(data => this.employeesHttp = data,
               error => this.errorMsg = error);    
  } 

  //for git purposes only 2

}

