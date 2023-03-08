import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';

import woloxLogo from '../../../../assets/wolox-logo.png';
import { signUp } from '../../../../services/UserServices';

import styles from './styles.module.scss';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
  const { t, i18n } = useTranslation();

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IFormInput>();
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => signUp(data);

  const { isLoading, error, isError, isSuccess, status } = useMutation((data: IFormInput) => signUp(data));

  console.log(isLoading, 'isLoading');
  console.log(error, 'error');
  console.log(isError, 'isError');
  console.log(isSuccess, 'isSuccess');
  console.log(status, 'status');

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
          <label htmlFor="firstName" className="label black m-bottom-1">
            {t('signUp:firstName')}
          </label>
          <input
            id="firstName"
            {...register('firstName', { required: 'Required' })}
            className={styles.input}
          />
          {errors.firstName && (
            <span role="alert" className={styles.error}>
              {errors.firstName.message}
            </span>
          )}
          <label htmlFor="lastName" className="label black m-bottom-1">
            {t('signUp:lastName')}
          </label>
          <input id="lastName" {...register('lastName', { required: 'Required' })} className={styles.input} />
          {errors.lastName && (
            <span role="alert" className={styles.error}>
              {errors.lastName.message}
            </span>
          )}
          <label htmlFor="email" className="label black m-bottom-1">
            {t('signUp:email')}
          </label>
          <input id="email" {...register('email', { required: 'Required' })} className={styles.input} />
          {errors.email && (
            <span role="alert" className={styles.error}>
              {errors.email.message}
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
          <label htmlFor="confirmPassword" className="label black m-bottom-1">
            {t('signUp:confirmPassword')}
          </label>
          <input
            id="confirmPassword"
            className={styles.input}
            {...register('confirmPassword', { required: 'Required' })}
            type="password"
          />
          {errors.confirmPassword && (
            <span role="alert" className={styles.error}>
              {errors.confirmPassword.message}
            </span>
          )}
          <button role="mainButton" className={styles.mainbutton} type="submit">
            {t('signUp:signUp')}
          </button>
          <input className={styles.grayline} />
          <button className={styles.secundarybutton} type="submit">
            {t('signUp:login')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
