import { Question } from '../models';

const shuffleQuestion = (question: Question | undefined): string[] => {
  if (!question) return [];

  const ans = [question.correct_answer, ...question.incorrect_answers];

  if (question.type === 'boolean') return ['True', 'False'];

  ans.sort((a, b) => {
    const x = Math.random();
    return x - 0.5;
  });

  return ans;
};

export default shuffleQuestion;
