import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import { HttpModule } from "@angular/http";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions : any[];

  constructor(private http: Http) { 
    this.http = http;
  }

  ngOnInit() {
    this.getAll();

  }

  getAll(){

    this.http
  .get("http://45.32.231.89/api/v1/questions")
  .map((response: Response) => response.json())
  .subscribe(
    res => {

      
      console.log(res);

      this.questions = res.data;
     


     
    },
    err => {
      // let error = JSON.parse(err.text());
      console.log(err);

      return false;
    }
  );


  }

  delete(id){

    this.http
    .delete("http://45.32.231.89/api/v1/question/"+ id)
    .map((response: Response) => response.json())
    .subscribe(
      res => {
  
        
        console.log(res);
  
        this.questions = res.data;
        
        this.getAll();
       
  
  
       
      },
      err => {
        // let error = JSON.parse(err.text());
        console.log(err);
  
        return false;
      }
    );


  }

  
}
