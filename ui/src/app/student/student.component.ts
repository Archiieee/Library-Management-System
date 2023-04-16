import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title = 'Students Page'
  students: any = [];
  //constructor() { }
  constructor(private router: Router,  private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllStudents()
  }
  addStudents(){
    console.log("addStudentsbutton clicked")
    //take user to add-books url
    this.router.navigateByUrl('/add-students')
  }
  fetchAllStudents(){
    this.http.get("http://localhost:8080/student/getAllStudents")
    .subscribe(resp =>{
      this.students = resp;
      console.log('Students retrieved successfully:', this.students)
    }, error => {
      console.error('Error retrieving students:', error);
    });
  }
    deleteStudent(Id:Number){
      const url = 'http://localhost:8080/student/deleteStudentById/' + Id
      console.log(url)
      this.http.delete(url)
      .subscribe(resp => {
        console.log('Student deleted successfully');
        this.fetchAllStudents()
      }, error => {
        console.error('Error deleting student:', error);
      });
  }

updateStudent(Id :Number){
  console.log("update student button clicked ")
  this.router.navigate(['/update-student',Id])
}
}
