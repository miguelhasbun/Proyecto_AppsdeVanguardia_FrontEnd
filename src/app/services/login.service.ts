import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
 
@Injectable()
export class LoginService {
 
    constructor(private http: HttpClient){
 
    }
     
    validateLogin(user: User){
        return this.http.post('mongodb+srv:// BorisGerardo:1234@cluster0-pyexl.azure.mongodb.net/test?retryWrites=true&w=majority',{
            username : user.username,
            password : user.password
        })
    }
 
}