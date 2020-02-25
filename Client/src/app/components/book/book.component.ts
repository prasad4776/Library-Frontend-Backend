import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books = [{book_name : 'abc',price: 10}]
  selectedBook;


  constructor(private api:ApiService){
    this.getBooks();
    this.selectedBook = {id: -1, book_name: '' , price: '' };
  
    
  }

  getBooks(){
      this.api.getAllBooks().subscribe(
        data => {
          console.log(data, '###$$$^^^')
            this.books = data;
                },
        error => {
          console.log(error);
                 }
      )   
  }

  bookClicked = (book) => {
    this.api.getOneBook(book.id).subscribe(
      data => {
        this.selectedBook = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateBook = () => {
    this.api.updateBook(this.selectedBook).subscribe(
      data => {
        this.getBooks();
      },
      error => {
        console.log(error);
      }
    );
  }
  createBook = () => {
    this.api.createBook(this.selectedBook).subscribe(
      data => {
        this.books.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteBook = () => {
    this.api.deleteBook(this.selectedBook.id).subscribe(
      data => {
        this.getBooks();
      },
      error => {
        console.log(error);
      }
    );
  }
}



