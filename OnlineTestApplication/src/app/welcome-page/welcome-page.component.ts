import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit{

  user:any
  email:string=''
  constructor(private router:Router,private http:HttpClient){}
  ngOnInit(): void {
    this.email=sessionStorage.getItem('email')!
    const formdata=new FormData();
    formdata.append('email',this.email)
    this.http.post<any>('http://localhost:8080/user',formdata).subscribe(
      (res:any)=>{
        this.user=res;

      }
      ,(error)=>{
        console.log(error)
      }
    )
  }

}
