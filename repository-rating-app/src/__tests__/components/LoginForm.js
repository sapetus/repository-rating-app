import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import LoginFormContainer from '../../components/LoginForm/LoginFormContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<LoginFormContainer onSubmit={onSubmit} />);

      act(() => {
        fireEvent.changeText(getByTestId("usernameField"), 'kalle');
        fireEvent.changeText(getByTestId("passwordField"), 'password');
        fireEvent.press(getByTestId("submitButton"));
      });

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password'
        });
      });
    });
  });
});