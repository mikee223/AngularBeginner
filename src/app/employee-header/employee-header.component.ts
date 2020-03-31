import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router'

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent implements OnInit {
  public selectedClass = 'text-success'

  employees = [
      {"id": 1 , "name": "mike"},
      {"id": 2, "name": "acel" },
      {"id": 3, "name": "bitoy" }
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  public selectedId;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(employee){
    this.router.navigate(['/employeeList',employee.id])
    // this.router.navigate(['/employeeList', {"id" :employee.id ,"name" : employee.name}])
    // this.router.navigate(['/employeeList', { "id": employee.id, "name": employee.name }])
  }

  isSelected(employee){    
    return employee.id === this.selectedId;
  }

}
