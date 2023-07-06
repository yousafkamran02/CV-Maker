import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CV_Info, User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(myhttp:HttpClient) {}
  
    userUrl:string='localhost:7088/api/Users';
    infoUrl:string='localhost:7088/api/CVInfoes';
    listUsers:User[]=[];
    listinfo:CV_Info[]=[];
}
