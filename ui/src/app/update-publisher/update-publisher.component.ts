import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-publisher',
  templateUrl: './update-publisher.component.html',
  styleUrls: ['./update-publisher.component.css']
})
export class UpdatePublisherComponent implements OnInit {
    publisherForm: FormGroup;
    publisher :any=[];
    publisherId: any
    constructor(private formBuilder: FormBuilder,  private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) {
  this.publisherForm = this.formBuilder.group({
    id:['', Validators.required],
    name:['', Validators.required],
    address:[''],
    phone:[''],
    email:[],
  })
 }

ngOnInit(): void {
  this.publisherId = this.activatedroute.snapshot.params['id'];
  this.fetchPublisher(this.publisherId);
}

fetchPublisher(publisherId: Number){
  this.http.get("http://localhost:8080/publisher/findById/"+publisherId)
  .subscribe(resp =>{
    this.publisher=resp;
    console.log(this.publisher)
    this.publisherForm.patchValue({ id: this.publisher.id})
    this.publisherForm.patchValue({ title: this.publisher.name});
    this.publisherForm.patchValue({ author: this.publisher.address });
    this.publisherForm.patchValue({ isbn: this.publisher.phone});
    this.publisherForm.patchValue({ copies: this.publisher.email });
   
  },
  error =>{
    console.log(error);
  })

}

savePublisher(){
  // Make Post call to request url 
  
  let publisherData = this.publisherForm.value;
  // Handle date to string
  this.http.put('http://localhost:8080/publisher/updatePublisher',publisherData)
  .subscribe(response => {
    console.log('Publisher saved to DB', response)
    this.router.navigateByUrl('/publishers')
  }, error =>{
    console.error("Error inpublisher save", error)
  }
  );

}
  }
