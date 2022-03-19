import { Userwithpoints } from './../model/userwithpoints';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Answer } from '../model/answer';
import { QuestionService } from '../service/question.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  static OnInit() {
    throw new Error('Method not implemented.');
  }

  email:string="";
  questionList:any=[];
  listAnswerDetails: Answer[] = [];

  currentQuestion:number=0;
  points:number=0;
  correctAnswer:number=0;
  inCorrectAnswer:number=0;
  interval$:any;

  progressOutPut:number = 1;
  //timer
  timeLeft: number = 15;
  // interval:any;
  show:number =1;

  constructor(private questionService:QuestionService,
    private router: Router,) {}
  ngOnInit() {}

//timer starts when button startTimer click
  startTimer(){
      //get email and questionlist in local storage when questions page load
    this.email = localStorage.getItem("email")!;
    this.questionList = JSON.parse(localStorage.getItem("questions")!);

    this.show =2;
    this.interval$ = interval(1000)
    .subscribe(val =>{

      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
         var answerNull = {
           correct:false,
           text: null
         }
         //auto submit null= wrong if user not answered
        this.submitAnswer(this.questionList[this.currentQuestion], answerNull);
      }
    });
  }

   submitAnswer(questionDetails:any, answer: any){
    this.show =2;
    setTimeout(() => {

      var answerDetail:Answer =  {
        questionId: questionDetails.ID,
        question : questionDetails.questionText,
        answer: answer.text,
        points : answer.correct ? 100 : 0
      }
      this.points += answerDetail.points;

      if(answer.correct){
      this.correctAnswer +=1;
      this.timeLeft = 15;
      this.currentQuestion +=1;
    }
    else{
        this.inCorrectAnswer +=1;
        this.timeLeft = 15;
        this.currentQuestion +=1;
      }

      this.listAnswerDetails.push(answerDetail);
      if(this.currentQuestion === this.questionList.length){

        var userWithPoints: Userwithpoints = {
        answers : this.listAnswerDetails,
        points : this.points,
        correctAnswer : this.correctAnswer,
        inCorrectAnswer : this.inCorrectAnswer
        }
        this.show =3;
        localStorage.setItem('userWithPoints',JSON.stringify(userWithPoints));
        this.interval$.unsubscribe();

      }

    }, 300);


   }

   restart(){
    localStorage.removeItem("userWithPoints");
    localStorage.removeItem("email");
    this.router.navigate(['signup']);
   }


}
