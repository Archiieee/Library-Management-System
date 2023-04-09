import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'; //
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  loansForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { //
    this.loansForm = this.formbuilder.group({
      id:['', Validators.required],
      bookId:['', Validators.required],
      studentId:[''],
      checkoutDate:[''],
      dueDate:[''],
      returnDate:[''],
    })
   }

  ngOnInit(): void {
  }
  saveLoan(){
    // Make Post call to request url 
    
    let loanData = this.loansForm.value;
    // Handle date to string
    this.http.post('http://localhost:8080/loan/saveLoan',loanData)
    .subscribe(response => {
      console.log('Loan saved to DB', response)
      this.router.navigateByUrl('/loans')
    }, error =>{
      console.error("Error in loan save", error)
    }
    );
  }
}
