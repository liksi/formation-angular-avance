import { Injectable } from '@angular/core';
import { User } from "../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private defaultUser: User = {
    firstname: 'John',
    surname: 'Doe'
  }

  user: Promise<User> = Promise.resolve(this.defaultUser);

  constructor() {
    // TODO
  }

  setUser(user: User) {
    // TODO
  }

  private getUserFromLocalStorage(): User | null {
    let userAsString = localStorage.getItem('user');
    if (!userAsString) {
      return null;
    } else {
      return JSON.parse(userAsString);
    }
  }

  private saveUserInLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
