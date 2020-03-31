import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public employeeId;
  public employeeName;

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))    
    // let name = this.route.snapshot.paramMap.get('name')
    // this.employeeName = name;
    this.employeeId = id;
  }

  onSelect() {

  }

}
