import { Component } from '@angular/core';
import { EmpDetails } from './service/emp-details';
import { EmployeeService } from './service/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Payroll';
  
  constructor(){ }
  ngOnInit() {
    
  }
}

