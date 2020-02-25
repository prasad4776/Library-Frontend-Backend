import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heading : string = 'Welcome to Library Management App';
  constructor() { }

  ngOnInit() {
  }

}
