import { Component, OnInit } from '@angular/core';
import { Issues } from 'src/app/issues';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {
  issues : Issues[];
  // = [{book_id : 1,person_id:3,issue_date:'2020-09-09',submission_date:'2020-09-04'}]
  selectedIssue;


  constructor(private api:ApiService){
    this.getIssues();
    this.selectedIssue = {id: -1, book_id: '' , person_id: '' ,issue_date:'',submission_date:''};
    
  }

  getIssues(){
      this.api.getAllIssues().subscribe(
        data => {
          console.log(data, 'gasdjadggdjgdjadgjasdassdadad')
            this.issues = data;
                },
        error => {
          console.log(error);
                 }
      )   
  }

  issueClicked = (issue) => {
    this.api.getOneIssue(issue.id).subscribe(
      data => {
        this.selectedIssue
        = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateIssue = () => {
    this.api.updateIssue(this.selectedIssue).subscribe(
      data => {
        this.getIssues();
      },
      error => {
        console.log(error);
      }
    );
  }
  createIssue = () => {
    this.api.createIssue(this.selectedIssue).subscribe(
      data => {
        this.issues.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteIssue = () => {
    this.api.deleteIssue(this.selectedIssue.id).subscribe(
      data => {
        this.getIssues();
      },
      error => {
        console.log(error);
      }
    );
  }

}



