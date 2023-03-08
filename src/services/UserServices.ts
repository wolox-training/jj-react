import apiFake from 'config/apiFake';
import apiApiary from 'config/apiApiary';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface LoginForm {
  username: string;
  password: string;
}

export const signUp = (data: IFormInput) => apiFake.post('/users', data);
export const login = (data: LoginForm) => apiApiary.post('/login', data);
