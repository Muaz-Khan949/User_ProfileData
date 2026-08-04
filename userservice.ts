import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { users } from './user-datatype';

@Injectable({
    providedIn: 'root'
})
export class Userservice {
    apiurl = "http://localhost:3000/users"
    constructor(private http: HttpClient){}

    getusers(){
     return this.http.get<users[]>(this.apiurl)
    }

    adduserdata(data: users){
        return this.http.post<users[]>(this.apiurl , data)
    }
    deleteuserdata(id: number){
        return this.http.delete<users[]>(`${this.apiurl}/${id}`)
    }

    getuser(id: number){
     return this.http.get<users>(`${this.apiurl}/${id}`)
    }

    edituser(id: number, data: users){
        return this.http.put<users>(`${this.apiurl}/${id}`, data)
    }
}
