import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataService {
    baseUrl:string = 'https://jsonplaceholder.typicode.com/'

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get(this.baseUrl+'users');
    }

    getPosts(userId:any) {
        return this.http.get(this.baseUrl+'posts?userId='+userId['userId']);
    }
}