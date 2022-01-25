import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { EmpDetails } from 'src/app/service/emp-details';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  empDetailList:EmpDetails[]=[];
  constructor(private empService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.getEmpDetail();
  }
  gotoAddEmployeePage() {
    this.router.navigateByUrl('/addEmployee');
  }
  getEmpDetail() {
    // this.empService.getEmpDetails().subscribe((data)=>{
    //   console.log(data);
   
   
		this.empService.getEmpDetails().subscribe( data => {
        this.user=data;
        this.empDetailList=this.user.empList;
        console.log(this.empDetailList);
      });
   
  }
}
