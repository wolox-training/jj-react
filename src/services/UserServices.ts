import apiFake from 'config/apiFake';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const singUp = (data: IFormInput) => apiFake.post('/users', data);
