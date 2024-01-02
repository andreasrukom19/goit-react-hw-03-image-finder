import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40733277-6610d0094f5f4332b1318844b';

export const onDataSearch = async (currentPage, searchQuery) => {
  const { data } = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: searchQuery,
      page: currentPage ?? 1,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    }
  });
  return data;
}
