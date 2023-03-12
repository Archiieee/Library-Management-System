import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loans = [
    {
      "id": 1,
      "bookId": 65,
      "studentId": 2,
      "checkoutDate": "11/11/2023",
      "dueDate": "11/12/23",
      "returnDate": "12/12/2023"
    },
    {
      "id": 2,
      "bookId": 66,
      "studentId": 5,
      "checkoutDate": "01/11/2023",
      "dueDate": "11/12/23",
      "returnDate": "12/12/2023"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
