import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'; //
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  authorsForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { //
    this.authorsForm = this.formbuilder.group({
      id:[''],
      name:['', Validators.required],
      birthDate:[''],
      nationality:[''],
    })
   }

  ngOnInit(): void {
  }
  saveAuthor(){
    // Make Post call to request url 
    
    let authorData = this.authorsForm.value;
    // Handle date to string
    this.http.post('http://localhost:8080/author/saveAuthor',authorData)
    .subscribe(response => {
      console.log('Author saved to DB', response)
      this.router.navigateByUrl('/authors')
    }, error =>{
      console.error("Error in author save", error)
    }
    );
  }

}
