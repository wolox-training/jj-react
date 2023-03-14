import apiApiary from 'config/apiApiary';

export const getBooks = () => apiApiary.get('/books');
export const getBooksById = (id: any) => apiApiary.get(`/books/${id}`);
