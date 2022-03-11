export interface ListResponse<T> {
  response_code?: number;
  results: T[];
}

export type QuestionType = 'multiple' | 'boolean' | 'any';
export type QuestionDifficulty = 'easy' | 'medium' | 'hard' | 'any';

export interface GetQuestionParams {
  amount: number;
  category?: number;
  difficulty?: string;
  type?: string;
  [key: string]: any;
}
