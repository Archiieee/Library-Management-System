import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  title = 'Publishers Page'
  publishers: any = [];
  //constructor() { }
  constructor(private router: Router,  private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllPublishers()
  }
  addPublishers(){
    console.log("addPublishersbutton clicked")
    //take user to add-publisersurl
    this.router.navigateByUrl('/add-publisher')
  }
  fetchAllPublishers(){
    this.http.get("http://localhost:8080/PublisherController/getAllPublisher")
    .subscribe(resp =>{
      this.publishers = resp;
      console.log('Publishers retrieved successfully:', this.publishers)
    }, error => {
      console.error('Error retrieving publishers:', error);
    });
  }
    deletePublisher(Id:Number){
      const url = 'http://localhost:8080/PublisherController/deletePublisherById/' + Id
      console.log(url)
      this.http.delete(url)
      .subscribe(resp => {
        console.log('Publisher deleted successfully');
        this.fetchAllPublishers()
      }, error => {
        console.error('Error deleting publishers:', error);
      });
  }
  updatePublisher(Id :Number){
    console.log("update publisher button clicked ")
    this.router.navigate(['/update-publisher',Id])
  }
}
