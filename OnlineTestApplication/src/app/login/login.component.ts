import { Component } from '@angular/core';
import { Route,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string=''
  password:string=''
  constructor(private router:Router,private http:HttpClient){}
  login(){
    const formdata=new FormData();
    formdata.append('email', this.email);
    formdata.append('password', this.password);
    console.log(formdata)
    this.http.post('http://localhost:8080/login',formdata).subscribe(
      (response:any)=>{
        if(response.isValid==true){
         
            sessionStorage.setItem('isLoggedIn','true');
            sessionStorage.setItem('email',this.email);
            this.router.navigate(['/welcome']);
          }
        
        else{
          sessionStorage.removeItem('isLoggedIn')
          alert('Invalid Username or Password')
        }
      },
      (error)=>{
        sessionStorage.removeItem('isLoggedIn')
        alert('Invalid Username or Password')
        console.log(error)
      }
    )
  }
}
