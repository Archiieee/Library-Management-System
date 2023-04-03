import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title = 'Books Page'
  books: any = [];
  //constructor() { }
  constructor(private router: Router,  private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllBooks()
  }
  addBooks(){
    console.log("addBooks button clicked")
    //take user to add-books url
    this.router.navigateByUrl('/add-books')
  }
  fetchAllBooks(){
    this.http.get("http://localhost:8080/book/getAllBooks")
    .subscribe(resp =>{
      this.books = resp;
      console.log('Books retrieved successfully:', this.books)
    }, error => {
      console.error('Error retrieving books:', error);
    });
  }
    deleteBook(Id:Number){
      const url = 'http://localhost:8080/book/delete/' + Id
      console.log(url)
      this.http.delete(url)
      .subscribe(resp => {
        console.log('Book deleted successfully');
        this.fetchAllBooks()
      }, error => {
        console.error('Error deleting book:', error);
      });
  }
}
