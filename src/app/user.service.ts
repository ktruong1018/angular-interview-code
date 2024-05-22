import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return of(USERS).pipe(map((response) => response as User[]));
  }

  authenticate(userNameOrEmail: string, password: string): Observable<boolean> {
    //if userNameOrEmail = USERS.username || USERS.email && password = USERS.password
    //accepts 2 fields from login
    //returns boolean

    for ( let i = 0; i < USERS.length; i++) {
      if ((userNameOrEmail == USERS[i].username || USERS[i].email) && (password == USERS[i].password)) {
        console.log("It's a match!");
      }
      else {
        console.log("No dice");
        //throw new Error('Invalid login');
      }
    }

    return of (true);


    // for (let i = 0; i < USERS.length; i++) {
    //   console.log("Username: ", USERS[i].username);
    //   console.log("Email: ", USERS[i].email);
    //   console.log("Password: ", USERS[i].password);
    // }

    // console.log("The email is :", userNameOrEmail);
    // console.log("The password is :", password);
    // console.log(USERS[0].username);
    // console.log(USERS[0].email);
    // console.log(USERS[0].password)

    //throw new Error('not implemented');
  }
}

const USERS = [
  {
    id: '001',
    username: 'user001',
    email: 'user001@mail.com',
    firstName: 'User',
    lastName: '001',
    password: '001',
  },
  {
    id: '002',
    username: 'user002',
    email: 'user002@mail.com',
    firstName: 'User',
    lastName: '002',
    password: '002',
  },
  {
    id: '003',
    username: 'user003',
    email: 'user003@mail.com',
    firstName: 'User',
    lastName: '003',
    password: '003',
  },
];
