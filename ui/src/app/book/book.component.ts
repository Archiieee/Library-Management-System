import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title = 'Books Page'
   books = [
  {
    "id": 33,
    "title": "archiii",
    "author": "Auth",
    "isbn": "987456",
    "publicationDate": "23/04/2012",
    "publisher": "Pub",
    "copies": 22,
    "category": "Cat",
    "genre": "gen",
    "subgenre": "ssubgen"
  },
  {
    "id": 65,
    "title": "Rahul",
    "author": "Author1",
    "isbn": "ISBN1",
    "publicationDate": "PubDate1",
    "publisher": "Publisher1",
    "copies": 1,
    "category": "Category1",
    "genre": "Genre1",
    "subgenre": "Subgenre1"
  },
  {
    "id": 66,
    "title": "Raj",
    "author": "Author2",
    "isbn": "ISBN2",
    "publicationDate": "PubDate2",
    "publisher": "Publisher2",
    "copies": 2,
    "category": "Category2",
    "genre": "Genre2",
    "subgenre": "Subgenre2"
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
