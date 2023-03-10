import apiApiary from 'config/apiApiary';

export const getBooks = () => apiApiary.get('/books');
