import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = environment.apiUrl;

  private constructor(private http: HttpClient) { }

  public add(user: User) {
    return this.http.post(`${this.apiUrl}/api/info`, user);
  }
}
