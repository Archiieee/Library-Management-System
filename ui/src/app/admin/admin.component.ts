import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'Admins Page'
  admins: any = [];
  //constructor() { }
  constructor(private router: Router,  private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllAdmins()
  }
  addAdmins(){
    console.log("addAdmins button clicked")
    //take user to add-admins url
    this.router.navigateByUrl('/add-admins')
  }
  fetchAllAdmins(){
    this.http.get("http://localhost:8080/admin/getAllAdmins")
    .subscribe(resp =>{
      this.admins = resp;
      console.log('Admins retrieved successfully:', this.admins)
    }, error => {
      console.error('Error retrieving admins:', error);
    });
  }
  deleteAdmin(Id:Number){
    const url = 'http://localhost:8080/admin/delete/' + Id
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Admin deleted successfully');
      this.fetchAllAdmins()
    }, error => {
      console.error('Error deleting admins:', error);
    });
}
updateAdmin(Id :Number){
  console.log("update admin button clicked ")
  this.router.navigate(['/update-admin',Id])
}
}
