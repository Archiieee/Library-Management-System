import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  adminForm: FormGroup;
  admin :any=[];
  adminId: any

  constructor(private formBuilder: FormBuilder,  private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) {
  this.adminForm = this.formBuilder.group({
    id:['', Validators.required],
    name:['', Validators.required],
    username:[''],
    password:[''],
  })
 }

ngOnInit(): void {
  this.adminId = this.activatedroute.snapshot.params['id'];
  this.fetchAdmin(this.adminId);
}

fetchAdmin(adminId: Number){
  this.http.get("http://localhost:8080/admin/findById/"+adminId)
  .subscribe(resp =>{
    this.admin=resp;
    console.log(this.admin)
    this.adminForm.patchValue({ id: this.admin.id})
    this.adminForm.patchValue({ title: this.admin.name});
    this.adminForm.patchValue({ author: this.admin.username });
    this.adminForm.patchValue({ isbn: this.admin.password });
  },
  error =>{
    console.log(error);
  })

}

saveAdmin(){
  // Make Post call to request url 
  
  let adminData = this.adminForm.value;
  // Handle date to string
  this.http.put('http://localhost:8080/admin/updateAdmin',adminData)
  .subscribe(response => {
    console.log('Admin saved to DB', response)
    this.router.navigateByUrl('/admins')
  }, error =>{
    console.error("Error in admin save", error)
  }
  );

}
}
