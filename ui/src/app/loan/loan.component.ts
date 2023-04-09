import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  title = 'Loan Page'
  loans: any = [];
  //constructor() { }
  constructor(private router: Router,  private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllLoans()
  }
  addLoans(){
    console.log("addLoans button clicked")
    //take user to add-loans url
    this.router.navigateByUrl('/add-loans')
  }
  fetchAllLoans(){
    this.http.get("http://localhost:8080/loan/getAllLoans")
    .subscribe(resp =>{
      this.loans = resp;
      console.log('Loans retrieved successfully:', this.loans)
    }, error => {
      console.error('Error retrieving loans:', error);
    });
  }
    deleteLoan(Id:Number){
      const url = 'http://localhost:8080/loan/delete/' + Id
      console.log(url)
      this.http.delete(url)
      .subscribe(resp => {
        console.log('Loan deleted successfully');
        this.fetchAllLoans()
      }, error => {
        console.error('Error deleting loan:', error);
      });
  }
  updateLoan(Id :Number){
    console.log("update loan button clicked ")
    this.router.navigate(['/loan-update',Id])
  }
}
