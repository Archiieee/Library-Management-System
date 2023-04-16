import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  authorForm: FormGroup;
  author :any=[];
  authorId: any

  constructor(private formBuilder: FormBuilder,  private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) {
    this.authorForm = this.formBuilder.group({
      id:['', Validators.required],
      name:[''],
      birthdate:[''],
      nationality:[''],
    })
   }

  ngOnInit(): void {
    this.authorId = this.activatedroute.snapshot.params['id'];
    this.fetchBook(this.authorId);
  }

  fetchBook(authorId: Number){
    this.http.get("http://localhost:8080/author/findById/"+ authorId)
    .subscribe(resp =>{
      this.author=resp;
      console.log(this.author)
      this.authorForm.patchValue({ id: this.author.id})
      this.authorForm.patchValue({ title: this.author.name});
      this.authorForm.patchValue({ author: this.author.birthdate });
      this.authorForm.patchValue({ isbn: this.author.nationality });
      
    },
    error =>{
      console.log(error);
    })

  }

  saveAuthor(){
    // Make Post call to request url 
    
    let authorData = this.authorForm.value;
    // Handle date to string
    this.http.put('http://localhost:8080/author/updateAuthor',authorData)
    .subscribe(response => {
      console.log('Author saved to DB', response)
      this.router.navigateByUrl('/authors')
    }, error =>{
      console.error("Error in author save", error)
    }
    );

  }
}
