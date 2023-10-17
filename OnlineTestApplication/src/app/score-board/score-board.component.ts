import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit{
  user:any[]=[]

  constructor(private router:Router,private http:HttpClient){}
  ngOnInit(): void {

    this.http.get<any[]>('http://localhost:8080/allUser').subscribe(
      (res:any[])=>{
        this.user=res;

      }
      ,(error)=>{
        console.log(error)
      }
    )
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
