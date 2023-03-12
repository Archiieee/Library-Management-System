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
    "author": "string",
    "isbn": "string",
    "publicationDate": "string",
    "publisher": "string",
    "copies": 0,
    "category": "string",
    "genre": "string",
    "subgenre": "string"
  },
  {
    "id": 34,
    "title": "kalaaaa",
    "author": "string",
    "isbn": "string",
    "publicationDate": "string",
    "publisher": "string",
    "copies": 0,
    "category": "string",
    "genre": "string",
    "subgenre": "string"
  },
  {
    "id": 35,
    "title": "kalaaaa",
    "author": "string",
    "isbn": "string",
    "publicationDate": "string",
    "publisher": "string",
    "copies": 0,
    "category": "string",
    "genre": "string",
    "subgenre": "string"
  },
  {
    "id": 65,
    "title": "Title1",
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
    "title": "Title2",
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
