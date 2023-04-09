import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'; //
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentsForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { //
    this.studentsForm = this.formbuilder.group({
      id:[''],
      name:['', Validators.required],
      rollNumber:[''],
      department:[''],
      birthDate:[''],
      
    })
   }
  ngOnInit(): void {
  }
  saveStudent(){
    // Make Post call to request url http://localhost:8080/book/saveStudent
    
    let studentData = this.studentsForm.value;
    // Handle date to string
    this.http.post('http://localhost:8080/student/saveStudent',studentData)
    .subscribe(response => {
      console.log('Student saved to DB', response)
      this.router.navigateByUrl('/students')
    }, error =>{
      console.error("Error in students save", error)
    }
    );
}
}
