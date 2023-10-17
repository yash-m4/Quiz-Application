import { Component } from '@angular/core';
import { Route,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name:string=''
  email:string=''
  password:string=''
constructor(private router:Router,private http:HttpClient){}


  registersubmit(){
    
    const formData=new FormData();
    formData.append('name',this.name);
    formData.append('email',this.email);
    formData.append('password',this.password);
     
    this.http.post('http://localhost:8080/addUser', formData).subscribe(
      {
        next: (res:any) => {
          if (res.status === 200) {
              // Successful response handling
              this.router.navigate(['/login'], { queryParams: { message: 'Registration Successful, Please Login to Continue' } });
          } else {
            alert('this email already exists')
          }
      },error(err) {
        alert('this email already exists')
        },complete() {
          
        },
      }
    )

}
}