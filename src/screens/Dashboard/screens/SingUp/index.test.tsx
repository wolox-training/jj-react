import { render, screen, fireEvent } from '@testing-library/react';

import SignUp from '.';

describe('Suite test of SingUp Screen', () => {
  test('should show sign-up form', () => {
    render(<SignUp />);

    fireEvent.input(screen.getByLabelText('Nombre'), {
      target: {
        value: 'firstName'
      }
    });
    expect(screen.getByLabelText('Nombre')).toHaveValue('firstName');

    fireEvent.input(screen.getByLabelText('Apellido'), {
      target: {
        value: 'lastName'
      }
    });
    expect(screen.getByLabelText('Apellido')).toHaveValue('lastName');

    fireEvent.input(screen.getByLabelText('Email'), {
      target: {
        value: 'email'
      }
    });
    expect(screen.getByLabelText('Email')).toHaveValue('email');

    fireEvent.input(screen.getByLabelText('Password'), {
      target: {
        value: 'password'
      }
    });
    expect(screen.getByLabelText('Password')).toHaveValue('password');

    fireEvent.input(screen.getByLabelText('Confirmación de Password'), {
      target: {
        value: 'confirmPassword'
      }
    });
    expect(screen.getByLabelText('Confirmación de Password')).toHaveValue('confirmPassword');

    fireEvent.submit(screen.getByRole('mainButton'));
  });

  test('should display required error when value is invalid', async () => {
    render(<SignUp />);
    const alerts = 5;
    fireEvent.submit(screen.getByRole('mainButton'));

    expect(await screen.findAllByRole('alert')).toHaveLength(alerts);
  });
});
