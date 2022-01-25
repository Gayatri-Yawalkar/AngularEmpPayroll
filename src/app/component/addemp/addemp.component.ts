import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MonthType } from './monthType';
import { Department } from './department-class';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  apiUrl: string=environment.API_URL;
  salaryList:Number[]=[30000,35000,40000,45000,50000];
  dayList:String[]=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
  monthList:MonthType[]=[{id:"01",Name:"January"},
                          {id:"02",Name:"February"},
                          {id:"03",Name:"March"},
                          {id:"04",Name:"April"},
                          {id:"05",Name:"May"},
                          {id:"06",Name:"June"},
                          {id:"07",Name:"July"},
                          {id:"08",Name:"August"},
                          {id:"09",Name:"September"},
                          {id:"10",Name:"October"},
                          {id:"11",Name:"November"},
                          {id:"12",Name:"December"}];
  yearList:String[]=["2022","2021","2020","2019","2018"];
  profileList:any=[ {id:1,pic:"assets/images/male.jpg"},
                    {id:2,pic:"assets/images/female.jpg"},
                    {id:3,pic:"assets/images/malep.jpg"},
                    {id:4,pic:"assets/images/femalep.jpg"}
                  ];
  formdata:any;
  name:any;
  gender:any;
  department:Department[]=[
                {id:1,select:false,name:"HR"},
                {id:2,select:false,name:"Sales"},
                {id:3,select:false,name:"Finance"},
                {id:4,select:false,name:"Engineers"},
                {id:5,select:false,name:"Others"}
  ];
  checkedDeptArray:any=[];
  salary:any;
  notes:any;
  day:any;
  month:any;
  year:any;
  startDate:any;
  profilePic:any
  constructor(private http:HttpClient,private router: Router) { }
  ngOnInit() {
    this.formdata=new FormGroup({
      name:new FormControl(),
      gender:new FormControl(),
      notes:new FormControl(),
      profilePic:new FormControl()
    });
  }
  changeSalary(e:any) {
    this.salary=e.target.value;
  }
  changeDay(e:any) {
    this.day=e.target.value;
  }
  changeMonth(e:any) {
    this.month=e.target.value;
  }
  changeYear(e:any) {
    this.year=e.target.value;
  }
  onChangedDept($event:any) {
    const dept=$event.target.value;
    console.log(dept);
    if($event.target.checked) {
      this.checkedDeptArray.push($event.target.value);                                                 
    }
  }
  onClickSubmit(data:any) {
    this.name=data.name;
    this.gender=data.gender;   
    this.startDate=this.year+"-"+this.month+"-"+this.day;
    this.notes=data.notes;
    this.profilePic=data.profilePic;
    console.log(this.profilePic);
    this.http.post<any>(`${this.apiUrl}/employeepayrollservice/create`,{name:this.name,salary:this.salary,gender:this.gender,startDate:this.startDate,note:this.notes,profilePic:"MyPic",department:this.checkedDeptArray}).subscribe(data => {    
    })
    this.router.navigateByUrl('/empDetail');
  }
}
