import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }
  public employeeId;
  public employeeName;

  ngOnInit(): void {
    
    // let name = this.route.snapshot.paramMap.get('name')
    // this.employeeName = name;
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.employeeId = id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.employeeId = id;
    });
  }

  goPrevious() {
    let previousId = this.employeeId - 1;
    this.router.navigate(['/employeeList',previousId]);
  }

  goNext() {
    let nextId = this.employeeId + 1;
    this.router.navigate(['/employeeList', nextId]);
  }

  goBack() {
    let selectedId = this.employeeId ?  this.employeeId : null;
    this.router.navigate(['/employeeList', {id: selectedId}]) // optional parameter
  }

}
