import { Post } from './../models';
import axiosClient from './axiosClient';

const postApi = {
  getAll(): Promise<Post[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return axiosClient.get(url);
  },
};

export default postApi;
