import { Category, ListResponse } from '../models';
import axiosClient from './axiosClient';

interface ListCatResponse {
  trivia_categories: Category[];
}

const categoryApi = {
  async getAll(): Promise<ListResponse<Category>> {
    const res = await axiosClient.get<ListCatResponse>('/api_category.php');
    return { results: res.data.trivia_categories };
  },
};

export default categoryApi;
