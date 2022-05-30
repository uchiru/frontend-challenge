import type { IPagination } from 'types/request';
import { api } from './config';

export const images = {
  getImages: function ({ limit, page }: IPagination) {
    return api.get(`/images/search?limit=${limit}&page=${page}`);
  },
};
