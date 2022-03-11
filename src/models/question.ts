import { QuestionDifficulty, QuestionType } from './common';

export interface Question {
  category: string;
  type: QuestionType;
  difficulty: QuestionDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
