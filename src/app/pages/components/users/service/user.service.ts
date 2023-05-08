import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export default class UserService {
    constructor(private http: HttpClient) { }

    async getAllUser(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }
}