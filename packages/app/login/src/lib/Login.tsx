import { BrandDuplex } from '@dataroom/ui-components';
import LoginForm from './components/login-form/LoginForm';
import RedirectToSignup from './components/redirect-to-signup/RedirectToSignup';

const Login = () => {
  return (
    <BrandDuplex title="Log In">
      <LoginForm />
      <RedirectToSignup />
    </BrandDuplex>
  );
};

export default Login;
