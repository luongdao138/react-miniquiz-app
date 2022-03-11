import { GetQuestionParams, QuestionConfig } from '../models';
const convertQuestionsParams = (config: QuestionConfig): GetQuestionParams => {
  let params: GetQuestionParams = {
    amount: config.amount,
  };

  if (config.category) params.category = config.category;

  if (config.difficulty !== 'any') params.difficulty = config.difficulty;

  if (config.type !== 'any') params.type = config.type;

  return params;
};

export default convertQuestionsParams;
