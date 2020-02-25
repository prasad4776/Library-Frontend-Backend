import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users :User[]
  //  = [{username:'abc',first_name : 'abc',last_name: 'as',}]

  constructor(private api:ApiService ) {
    this.getUsers();
   }

  ngOnInit() {}
  
  getUsers(){
    this.api.getAllUsers().subscribe(
      data => {
        console.log(data, '###$$$^^^')
          this.users = data;
              },
      error => {
        console.log(error);
               }
    )   
}

}
