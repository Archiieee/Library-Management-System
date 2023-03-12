import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [
    {
      "id": 33,
      "name": "Student1",
      "department": "Dep1",
      "rollNumber": "11",
      "birthDate": "03/02/2004",
      "mobileNumber": "123456"
    },
    {
      "id": 34,
      "name": "Student2",
      "department": "Dep2",
      "rollNumber": "18",
      "birthDate": "03/12/2000",
      "mobileNumber": "12346"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
