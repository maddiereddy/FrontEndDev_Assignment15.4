import { Injectable } from '@angular/core';

export class User {
  constructor(
    public id: number,
    public name: string){}
}

let users = [
  {id: 1, name: "Maddie"},
  {id: 2, name: "Steve"},
  {id: 3, name: "Nikhil"},
  {id: 4, name: "Sarah"},
  {id: 5, name: "Neha"},
  {id: 6, name: "Rajiv"},
  {id: 7, name: "Andrew"},
  {id: 8, name: "Tommy"},
  {id: 9, name: "Patty"},
  {id: 10, name: "Susan"},
];

@Injectable()
export class UserService {

  getUsers(): User[] {
    return users;
  }

}
