import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent implements OnInit {

  employees = [
      {"id": 1 , "name": "mike"},
      {"id": 2, "name": "acel" },
      {"id": 3, "name": "bitoy" }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(employee){
    this.router.navigate(['/employeeList',employee.id])
    // this.router.navigate(['/employeeList', {"id" :employee.id ,"name" : employee.name}])
    // this.router.navigate(['/employeeList', { "id": employee.id, "name": employee.name }])
  }

}
