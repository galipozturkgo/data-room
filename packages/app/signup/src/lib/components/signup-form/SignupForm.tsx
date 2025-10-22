import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from '@dataroom/ui-queries';

import schema from './SignupForm.schema';
import { Form, useFormHook } from '@dataroom/ui-components';
import { ErrorCode, Signup } from '@dataroom/shared-types';
import { isServerError } from '@dataroom/shared-utils';
import { useAuth, useAuthNotifications } from '@dataroom/ui-contexts';
import { classes } from '@dataroom/ui-utils';

const SignupForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const authNotifications = useAuthNotifications();
  const [signup, { data, error }] = useSignupMutation();
  const { hook, setFieldErrors } = useFormHook<Signup>({
    schema,
  });

  useEffect(() => {
    data?.user && login(data.user);
  }, [data]);

  useEffect(() => {
    if (isServerError(error)) {
      if (error.data.errors) {
        setFieldErrors(error.data.errors);
      } else if (
        error.data.error?.code === ErrorCode.AccountAlreadyExistsError
      ) {
        authNotifications('AccountAlreadyExists', () => navigate('/login'));
      } else {
        authNotifications('SomethingWentWrong');
      }
    }
  }, [error]);

  const handleSubmit = async (data: Signup) => {
    try {
      await signup(data);
    } catch {
      authNotifications('SomethingWentWrong');
    }
  };

  return (
    <Form<Signup> hook={hook} handleSubmit={handleSubmit}>
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
        <div className={styles.name}>
          <Form.Text
            field="firstName"
            type="firstName"
            label="Firstname"
            placeholder="Firstname"
            spellCheck="false"
            autoComplete="given-name"
            tabIndex={4}
          />
          <Form.Text
            field="lastName"
            type="lastName"
            label="Lastname"
            placeholder="Lastname"
            spellCheck="false"
            autoComplete="family-name"
            tabIndex={5}
          />
        </div>
        <Form.Text
          field="password"
          type="password"
          label="Password"
          placeholder="Password"
          spellCheck="false"
          autoComplete="new-password"
          autoCorrect="off"
          tabIndex={6}
        />
        <Form.Text
          field="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Confirm password"
          spellCheck="false"
          autoComplete="new-password"
          autoCorrect="off"
          tabIndex={7}
        />
      </Form.Panel>
      <Form.Footer
        confirm={{
          className: styles.button,
          text: 'Sign Up',
          tabIndex: 8,
        }}
        cancel={{ hidden: true }}
      />
    </Form>
  );
};

const styles = {
  button: classes('w-full', 'mt-2'),
  name: classes('flex', 'justify-between', 'space-x-2'),
};

export default SignupForm;
