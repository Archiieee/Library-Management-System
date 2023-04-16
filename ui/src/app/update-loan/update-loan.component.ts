import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-loan',
  templateUrl: './update-loan.component.html',
  styleUrls: ['./update-loan.component.css']
})
export class UpdateLoanComponent implements OnInit {
  loanForm: FormGroup;
  loan :any=[];
  loanId: any

  constructor(private formBuilder: FormBuilder,  private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) {
    this.loanForm = this.formBuilder.group({
      id:['', Validators.required],
      bookId:['', Validators.required],
      studentId:[''],
      dueDate:[''],
      returnDate:[],
    })
   }

  ngOnInit(): void {
    this.loanId = this.activatedroute.snapshot.params['id'];
    this.fetchLoan(this.loanId);
  }

  fetchLoan(loanId: Number){
    this.http.get("http://localhost:8080/loan/findById/"+loanId)
    .subscribe(resp =>{
      this.loan=resp;
      console.log(this.loan)
      this.loanForm.patchValue({ id: this.loan.id})
      this.loanForm.patchValue({ title: this.loan.bookId});
      this.loanForm.patchValue({ author: this.loan.studentId });
      this.loanForm.patchValue({ isbn: this.loan.dueDate });
      this.loanForm.patchValue({ copies: this.loan.returnDate });
    },
    error =>{
      console.log(error);
    })

  }

  saveLoan(){
    // Make Post call to request url 
    
    let loanData = this.loanForm.value;
    // Handle date to string
    this.http.put('http://localhost:8080/loan/updateLoan',loanData)
    .subscribe(response => {
      console.log('Loansaved to DB', response)
      this.router.navigateByUrl('/loans')
    }, error =>{
      console.error("Error in loan save", error)
    }
    );

  }

}
