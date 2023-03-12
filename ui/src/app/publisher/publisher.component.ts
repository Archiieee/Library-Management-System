import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  publishers = [
    {
      "id": 1,
      "name": "Publisher1",
      "address": "Add1",
      "phone": "Phone1",
      "email": "mail1"
    },
    {
      "id": 2,
      "name": "Publisher2",
      "address": "Add2",
      "phone": "12232",
      "email": "mail2"
    },
    {
      "id": 3,
      "name": "Publisher3",
      "address": "Add3",
      "phone": "122455",
      "email": "mail3"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
