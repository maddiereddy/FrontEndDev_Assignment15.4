import { Component, DoCheck, OnInit } from '@angular/core';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements DoCheck, OnInit {
  doCheckWord: string;
  users: User[];
  userService: UserService;

  constructor(userService: UserService){
    this.doCheckWord = "";
    this.userService = userService;
  }

  //check if entered string is longer than 3 and print alert
  //since alert would go on infinitely, entered string is cleared
  //ngModel is used for two-way binding to the local variable string
  ngDoCheck(){
    if(this.doCheckWord.length > 3) {
      alert(`${this.doCheckWord} is longer than 3 letters!`);
      this.doCheckWord = "";
    }
  }

  //get list of users from the service and populate local variable array of users
  //users are looped in a for loop on the view and rendered
  ngOnInit(){
    this.users = this.userService.getUsers()
  }
}
