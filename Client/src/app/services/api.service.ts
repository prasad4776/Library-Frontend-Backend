import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http : HttpClient) { }

  getAllBooks() : Observable<any>{
    return this.http.get(this.baseurl + 'book/',
    {headers : this.httpHeaders})}

  getAllAuthors() : Observable<any>{
      return this.http.get(this.baseurl + 'author/',
      {headers : this.httpHeaders})}

  getAllIssues() : Observable<any>{
        return this.http.get(this.baseurl + 'issue/',
        {headers : this.httpHeaders})}
  
  getAllUsers():Observable<any>{
    return this.http.get(this.baseurl + 'user/',
    {headers : this.httpHeaders})}
  

  getOneAuthor(id): Observable<any> {
          return this.http.get(this.baseurl + 'author/' + id + '/',
          {headers: this.httpHeaders});
        }
  updateAuthor(author): Observable<any> {
          const body = {first_name: author.first_name , last_name: author.last_name, book:author.book};
          return this.http.put(this.baseurl + 'author/' + author.id + '/', body,
          {headers: this.httpHeaders});
        }
  createAuthor(author): Observable<any> {
          const body = {first_name: author.first_name , last_name: author.last_name, book:author.book};
          return this.http.post(this.baseurl + 'author/', body,
          {headers: this.httpHeaders});
        }

  deleteAuthor(id): Observable<any> {
          return this.http.delete(this.baseurl + 'author/' + id + '/',
          {headers: this.httpHeaders});
        }

  getOneBook(id): Observable<any> {
          return this.http.get(this.baseurl + 'book/' + id + '/',
          {headers: this.httpHeaders});
        }
  updateBook(book): Observable<any> {
    
          const body = {book_name: book.book_name , price: book.price};
          return this.http.put(this.baseurl + 'book/' + book.id + '/', body,
          {headers: this.httpHeaders});
        }
  createBook(book): Observable<any> {
          const body = {book_name: book.book_name , price: book.price};
          return this.http.post(this.baseurl + 'book/', body,
          {headers: this.httpHeaders});
        }
  deleteBook(id): Observable<any> {
          return this.http.delete(this.baseurl + 'book/' + id + '/',
          {headers: this.httpHeaders});
        }




  getOneIssue(id): Observable<any> {
          return this.http.get(this.baseurl + 'issue/' + id + '/',
          {headers: this.httpHeaders});
        }
  updateIssue(issue): Observable<any> {
          const body = {book_id:issue.book_id  , person_id: issue.person_id,issue_date:issue.issue_date,submission_date:issue.submission_date};
          return this.http.put(this.baseurl + 'issue/' + issue.id + '/', body,
          {headers: this.httpHeaders});
        }
  createIssue(issue): Observable<any> {
      const body = {book_id:issue.book_id  , person_id: issue.person_id,issue_date:issue.issue_date,submission_date:issue.submission_date};
  
          return this.http.post(this.baseurl + 'issue/', body,
          {headers: this.httpHeaders});
        }
  deleteIssue(id): Observable<any> {
          return this.http.delete(this.baseurl + 'issue/' + id + '/',
          {headers: this.httpHeaders});
        }
}
