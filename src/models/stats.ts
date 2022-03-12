export interface History {
  number: number;
  answer: string;
}

export interface Stats {
  currentQuestion: number;
  score: number;
  correctAns: number;
  incorrectAns: number;
  attemptedQuestion: number;
  history: History[];
}
