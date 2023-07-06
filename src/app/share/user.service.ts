import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CV_Info, User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myhttp:HttpClient) {}
  
    userUrl:string='https://localhost:7088/api/users';
    infoUrl:string='http://localhost:7088/api/CVInfoes';
    listUsers:User[]=[];
    listinfo:CV_Info[]=[];

    UserData:User= new User();


    saveData(){
      return this.myhttp.post(this.userUrl,this.UserData); //insert data
    }
    // updateData(){
    //   return this.myhttp.put(`${this.userUrl}/${this.UserData.Id}`,this.UserData); //Update data
    // }
    getUser():Observable<User[]>
    {
      return this.myhttp.get<User[]>(this.userUrl);
    }
    getinfo():Observable<CV_Info[]>
    {
      return this.myhttp.get<CV_Info[]>(this.infoUrl);
    }
}
