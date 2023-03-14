import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  booksForm : FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.booksForm = this.formbuilder.group({
      name:['', Validators.required],
      author:[''],
      isbn:[''],
      copies:[5]
    })
   }

  ngOnInit(): void {
  }

}
