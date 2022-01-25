import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EmpDetails } from './emp-details';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl: string=environment.API_URL;
  constructor(private httpClient: HttpClient) { }
  getEmpDetails() {
    return this.httpClient.get(`${this.apiUrl}/employeepayrollservice/get`);
  }
}
