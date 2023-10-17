import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{

  constructor(private route: ActivatedRoute,private router:Router,private http:HttpClient) { }
  score: string='';
  email:string=''
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.score = params['score'] || '';
  });

  this.email=sessionStorage.getItem('email')!
    const formdata=new FormData();
    formdata.append('email',this.email)
    formdata.append('score',this.score)
    this.http.post<any>('http://localhost:8080/updateScore',formdata).subscribe(
      (res:any)=>{
       console.log(res)
      }
      ,(error)=>{
        console.log(error)
      }
    )
}
}