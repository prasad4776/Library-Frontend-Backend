import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/author';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  authors : Author[];
  //= [{first_name : 'abc',last_name:'abcc,',book:[1,1,1]}]
  selectedAuthor;
  

  constructor(private api:ApiService){
    this.getAuthors();
    this.selectedAuthor = {id: -1, first_name: '' , last_name: '',book :'' };
  
    
  }
  
  getAuthors(){
      this.api.getAllAuthors().subscribe(
        data => {
          console.log(data, 'gasdjadggdjgdjadgjasdassdadad')
            this.authors = data;
                },
        error => {
          console.log(error);
                 }
      )   
  }

  authorClicked = (author) => {
    this.api.getOneAuthor(author.id).subscribe(
      data => {
        this.selectedAuthor = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateAuthor = () => {
    this.api.updateAuthor(this.selectedAuthor).subscribe(
      data => {
        this.getAuthors();
      },
      error => {
        console.log(error);
      }
    );
  }
  createAuthor = () => {
    this.api.createAuthor(this.selectedAuthor).subscribe(
      data => {
        this.authors.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteAuthor = () => {
    this.api.deleteAuthor(this.selectedAuthor.id).subscribe(
      data => {
        this.getAuthors();
      },
      error => {
        console.log(error);
      }
    );
  }
}






