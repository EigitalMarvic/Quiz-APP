import { QuestionService } from './../service/question.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  singUpEmail:string='';

  constructor(
    private router:Router,
    private questionService:QuestionService
    ) { }

  ngOnInit(): void {
  }
  signUP(){

    //add store email && question to localstorage from .json
    localStorage.setItem("email",this.singUpEmail);

    this.questionService.getQuestionInAssets()
    .subscribe((item) => {
      localStorage.setItem('questions',JSON.stringify(item));
    });
    this.router.navigate(['questions']);
  }
}
