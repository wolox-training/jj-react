import { render, screen, fireEvent } from '@testing-library/react';
import { useTranslation } from 'react-i18next';

import SignUp from '.';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: { changeLanguage: () => new Promise(() => ({})) }
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => ({})
  }
}));

describe('Suite test of signUp Screen', () => {
  const { t } = useTranslation();

  test('should show sign-up form', () => {
    render(<SignUp />);

    fireEvent.input(screen.getByLabelText(t('signUp:firstName')), {
      target: {
        value: 'firstName'
      }
    });
    expect(screen.getByLabelText(t('signUp:firstName'))).toHaveValue('firstName');

    fireEvent.input(screen.getByLabelText(t('signUp:lastName')), {
      target: {
        value: 'lastName'
      }
    });
    expect(screen.getByLabelText(t('signUp:lastName'))).toHaveValue('lastName');

    fireEvent.input(screen.getByLabelText(t('signUp:email')), {
      target: {
        value: 'email'
      }
    });
    expect(screen.getByLabelText(t('signUp:email'))).toHaveValue('email');

    fireEvent.input(screen.getByLabelText(t('signUp:password')), {
      target: {
        value: 'password'
      }
    });
    expect(screen.getByLabelText(t('signUp:password'))).toHaveValue('password');

    fireEvent.input(screen.getByLabelText(t('signUp:confirmPassword')), {
      target: {
        value: 'confirmPassword'
      }
    });
    expect(screen.getByLabelText(t('signUp:confirmPassword'))).toHaveValue('confirmPassword');

    fireEvent.submit(screen.getByRole('mainButton'));
  });

  test('should display required error when value is invalid', async () => {
    render(<SignUp />);
    const alerts = 5;
    fireEvent.submit(screen.getByRole('mainButton'));

    expect(await screen.findAllByRole('alert')).toHaveLength(alerts);
  });

  test('should toggle the language es and en', () => {
    render(<SignUp />);

    screen.getByText(t('signUp:language'));

    fireEvent.click(screen.getByText(t('signUp:language')));

    screen.getByText(t('signUp:language'));
  });

  test('promise test', async () => {
    const delay = 1000;
    const onSubmit = new Promise<string>((resolve) => setTimeout(() => resolve('user'), delay));
    expect.assertions(1);
    await expect(onSubmit).resolves.toBe('user');
  });
});
