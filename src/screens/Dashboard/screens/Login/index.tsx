import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import woloxLogo from '../../../../assets/wolox-logo.png';
import { login } from '../../../../services/UserServices';
import LocalStorageService from '../../../../services/LocalStorageService';

import styles from './styles.module.scss';

interface LoginForm {
  username: string;
  password: string;
}

function Login() {
  const { t, i18n } = useTranslation();

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<LoginForm>();

  const navigate = useNavigate();

  const getSuccess = (res: any) => {
    LocalStorageService.setValue('Token', res.data.token);
    navigate('/');
  };

  const { isLoading, error, isError, isSuccess, status, data, mutate } = useMutation(
    (user: LoginForm) => login(user),
    { onSuccess: (res: any) => getSuccess(res) }
  );

  const onSubmit: SubmitHandler<LoginForm> = (user: LoginForm) => {
    mutate(user);
  };

  console.log('isLoading', isLoading);
  console.log('error', error);
  console.log('isError', isError);
  console.log('isSuccess', isSuccess);
  console.log('status', status);
  console.log('data', data);

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <div>
      <button
        type="button"
        id="languageButton"
        onClick={handleChangeLanguage}
        className={`row ${styles.languagebutton}`}
      >
        {t('signUp:language')}
      </button>
      <div className={styles.container}>
        <img className={styles.logowolox} src={woloxLogo} alt="woloxLogo" />
        <form className="column" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username" className="label black m-bottom-1">
            {t('signUp:username')}
          </label>
          <input id="username" {...register('username', { required: 'Required' })} className={styles.input} />
          {errors.username && (
            <span role="alert" className={styles.error}>
              {errors.username.message}
            </span>
          )}
          <label htmlFor="password" className="label black m-bottom-1">
            {t('signUp:password')}
          </label>
          <input
            id="password"
            {...register('password', { required: 'Required' })}
            type="password"
            className={styles.input}
          />
          {errors.password && (
            <span role="alert" className={styles.error}>
              {errors.password.message}
            </span>
          )}
          <button className={styles.mainbutton} type="submit">
            {t('signUp:signUp')}
          </button>
          <input className={styles.grayline} />
          <button role="mainButton" className={styles.secundarybutton} type="submit">
            {t('signUp:login')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
