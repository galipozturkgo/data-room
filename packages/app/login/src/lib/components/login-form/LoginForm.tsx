import { useLoginMutation } from '@dataroom/ui-queries';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '@dataroom/ui-utils';
import { useAuth, useAuthNotifications } from '@dataroom/ui-contexts';
import { ErrorCode, Login } from '@dataroom/shared-types';
import { isServerError } from '@dataroom/shared-utils';
import { Form, useFormHook } from '@dataroom/ui-components';
import { classes } from '@dataroom/ui-utils';
import { useEffect } from 'react';

import schema from './LoginForm.schema';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const authNotifications = useAuthNotifications();
  const [loginUser, { data, isSuccess, error }] = useLoginMutation();
  const { hook, getValues, setFieldErrors } = useFormHook<Login>({
    schema,
    defaultValues: {
      email: getLocalStorage('remember'),
    },
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    login(data.user);
  }, [data]);

  useEffect(() => {
    if (isServerError(error)) {
      if (error.data.errors) {
        setFieldErrors(error.data.errors);
      } else if (error.data.error?.code === ErrorCode.AccountNotFoundError) {
        authNotifications('AccountNotFound', () => navigate('/signup'));
      } else if (error.data.error?.code === ErrorCode.InvalidCredentialsError) {
        authNotifications('InvalidCredentials', () =>
          navigate('/password-reset'),
        );
      } else {
        authNotifications('SomethingWentWrong');
      }
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      const data = getValues();

      if (data.rememberMe) {
        setLocalStorage('remember', data.email);
      } else {
        removeLocalStorage('remember');
      }
    }
  }, [isSuccess]);

  const handleSubmit = async (data: Login) => {
    try {
      delete data.rememberMe;

      await loginUser(data);
    } catch {
      authNotifications('SomethingWentWrong');
    }
  };

  return (
    <Form<Login> hook={hook} handleSubmit={handleSubmit}>
      <Form.Panel>
        <Form.Text
          field="email"
          label="Email"
          placeholder="Email address"
          autoCapitalize="off"
          spellCheck="false"
          autoComplete="username"
          autoCorrect="off"
          tabIndex={3}
        />
        <Form.Text
          field="password"
          type="password"
          label="Password"
          placeholder="Password"
          spellCheck="false"
          autoComplete="current-password"
          autoCorrect="off"
          tabIndex={4}
        />
        <Form.Checkbox field="rememberMe" label="Remember me" tabIndex={5} />
      </Form.Panel>

      <Form.Footer
        confirm={{
          className: styles.button,
          text: 'Log In',
          tabIndex: 6,
        }}
        cancel={{ hidden: true }}
      />
    </Form>
  );
};

const styles = {
  wrapper: classes('flex', 'items-center', 'justify-between'),
  button: classes('w-full'),
};

export default LoginForm;
