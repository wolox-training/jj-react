import { useForm, SubmitHandler } from 'react-hook-form';

import woloxLogo from '../../../../assets/wolox-logo.png';

import styles from './styles.module.scss';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SingUp() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <img className={styles.logowolox} src={woloxLogo} alt="woloxLogo" />
      <form className="column" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName" className="label black m-bottom-1">
          Nombre
        </label>
        <input id="firstName" {...register('firstName', { required: 'Required' })} className={styles.input} />
        {errors.firstName && (
          <span role="alert" className={styles.error}>
            {errors.firstName.message}
          </span>
        )}
        <label htmlFor="lastName" className="label black m-bottom-1">
          Apellido
        </label>
        <input id="lastName" {...register('lastName', { required: 'Required' })} className={styles.input} />
        {errors.lastName && (
          <span role="alert" className={styles.error}>
            {errors.lastName.message}
          </span>
        )}
        <label htmlFor="email" className="label black m-bottom-1">
          Email
        </label>
        <input id="email" {...register('email', { required: 'Required' })} className={styles.input} />
        {errors.email && (
          <span role="alert" className={styles.error}>
            {errors.email.message}
          </span>
        )}
        <label htmlFor="password" className="label black m-bottom-1">
          Password
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
          Confirmación de Password
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
          Sing Up
        </button>
        <input className={styles.grayline} />
        <button className={styles.secundarybutton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default SingUp;
