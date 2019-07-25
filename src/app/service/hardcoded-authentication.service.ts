import { Injectable } from '@angular/core';
export class User {
  constructor(private id: number,
    public userName: string,
    public password: string,
    public role: string,
    public activityLables: string[]
  ) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  users: User[];
  constructor() {
    this.users = [
      new User(1, 'Ranga', 'Reddy', 'admin', ["login", "welcome", "todos"]),
      new User(2, 'User', 'User', 'user', ["login", "welcome"])
    ];
  }
  authenticate(userName, password) {
    var matchedUser = this.users.find(u => u.userName === userName && u.password === password);
    if (matchedUser != null) {
      sessionStorage.setItem('authenticatedUser', userName);
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user == null);
  }
  isUserLoggedInWithActivity(activityLable: string) {
    let userName = sessionStorage.getItem('authenticatedUser');
    var user = this.users.find(u => u.userName === userName && u.activityLables.indexOf(activityLable) != -1);
    return !(user == null);
  }
  logout() {
    let user = sessionStorage.removeItem('authenticatedUser');
    return (user == null);
  }
}
