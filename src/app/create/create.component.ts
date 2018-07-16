import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import { HttpModule } from "@angular/http";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: Http) { 
    this.http = http;
  }

  ngOnInit() {
  }

  isPosted = false;
  title = 'app';

  submit(question:HTMLInputElement,optiona:HTMLInputElement,optionb:HTMLInputElement,optionc:HTMLInputElement,optiond:HTMLInputElement,answer:HTMLInputElement,country:HTMLInputElement){
    console.log(question.value,optiona.value,optionb.value,optionc.value,optiond.value,answer.value,country.value);

    let body = {
      question: question.value,
      A: optiona.value,
      B: optionb.value,
      C:optionc.value,
      D:optiond.value,
      ANS:answer.value,
      country: country.value

    }
    this.http
        .post("http://45.32.231.89/api/v1/question", body)
        .map((response: Response) => response.json())
        .subscribe(
          res => {

            
            console.log(res);
            // this.isPosted = true;
            console.log(this.isPosted);


           
          },
          err => {
            // let error = JSON.parse(err.text());
            console.log(err);

            return false;
          }
        );

  }
  another1(){
    this.isPosted = false;
    console.log("another one!!!");
  }

}
