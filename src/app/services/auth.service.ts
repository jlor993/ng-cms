import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = 'http://localhost:3000/api/auth';
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http:HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
    //console.log(localStorage.getItem('currentUser'));
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, user, httpOptions)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.userSubject.next(null);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/register`, user, httpOptions);
  }

  isAuthenticated() {
    return localStorage.getItem('currentUser') != null;
  }

}