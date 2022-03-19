import { Answer } from "./answer";

export interface Userwithpoints {
  answers: Answer[],
  points: number,
  correctAnswer: number,
  inCorrectAnswer: number
}
