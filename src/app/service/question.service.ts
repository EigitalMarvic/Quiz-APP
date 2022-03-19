import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionList:any;
  constructor(private http:HttpClient) { }

  // this.questionList = JSON.parse(localStorage.getItem("questions")!);
  getQuestionInAssets(){
    return this.http.get<any>("/assets/questions.json");
  }

  getLocalQuesiton(){
    return  JSON.parse(localStorage.getItem("questions")!);
  }
}
