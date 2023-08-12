import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allowNewUser = false;
  userCreationSatus = 'No user was created';
  userName = 'TestUser';

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000)
  }
  ngOnInit(){

  }

  onCreateUser(){
    this.userCreationSatus =  'User was created! Name is ' + this.userName;
  }

  onUpdateUserName(event: Event){
    //console.log(event);
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
