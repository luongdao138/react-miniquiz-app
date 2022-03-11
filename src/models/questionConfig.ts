import { QuestionDifficulty, QuestionType } from './common';

export interface QuestionConfig {
  amount: number;
  category: number;
  type: QuestionType;
  difficulty: QuestionDifficulty;
}
