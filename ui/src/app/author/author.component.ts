import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author = [
    {
      "id": 1,
      "name": "author1",
      "age": 27,
      "birthDate": "11/11/1995",
      "nationality": "Indian"
    },
    {
      "id": 2,
      "name": "author2",
      "age": 28,
      "birthDate": "11/11/1994",
      "nationality": "Indian"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
