import { render } from 'utils/test.utils';
import AuthLogin from '../../sections/auth/auth-forms/AuthLogin';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

describe('AuthLogin Component', () => {
  beforeEach(() => {
    var loginForm = render(<AuthLogin />);
  });

  describe('renders', () => {
    test('renders the login form elements', () => {
      expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });
  });

  describe('form validations', () => {
    // Helper function to simulate clearing and typing into inputs
    const clearAndType = async (placeholder: string, value: string) => {
      const input = screen.getByPlaceholderText(placeholder);
      await userEvent.clear(input);
      if (value) await userEvent.type(input, value);
      return input;
    };

    test('show error when email input is empty', async () => {
      await clearAndType('Enter email address', '');
      await userEvent.keyboard('{Enter}'); // Simulate form submission
      expect(await screen.findByText('Email is required')).toBeInTheDocument();
    });

    test('show error when password input is empty', async () => {
      await clearAndType('Enter password', '');
      await userEvent.keyboard('{Enter}'); // Simulate form submission
      expect(await screen.findByText('Password is required')).toBeInTheDocument();
    });

    test('shows invalid when email error for incorrect email format', async () => {
      await clearAndType('Enter email address', 'invalid-email');
      await userEvent.keyboard('{Enter}');
      expect(await screen.findByText('Must be a valid email')).toBeInTheDocument();
    });

    test('accepts valid email and password', async () => {
      await clearAndType('Enter email address', 'testuser@example.com');
      await clearAndType('Enter password', 'ValidPassword123');
      await userEvent.click(screen.getByRole('button', { name: /login/i }));
      expect(await screen.queryByText('Email is required')).not.toBeInTheDocument();
      expect(await screen.queryByText('Password is required')).not.toBeInTheDocument();
    });
  });
});
