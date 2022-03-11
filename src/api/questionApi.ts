import { convertQuestionsParams } from '../helpers';
import { GetQuestionParams, ListResponse, Question, QuestionConfig } from '../models';
import axiosClient from './axiosClient';

const questionApi = {
  async getAll(config: QuestionConfig): Promise<ListResponse<Question>> {
    let params: GetQuestionParams = convertQuestionsParams(config);
    const data = await axiosClient
      .get<ListResponse<Question>>('/api.php', { params })
      .then((res) => res.data);

    return data;
  },
};

export default questionApi;
