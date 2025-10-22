import { BrandDuplex } from '@dataroom/ui-components';

import SignupForm from './components/signup-form/SignupForm';
import SignupRedirectLogin from './components/signup-redirect-login/SignupRedirectLogin';

const Signup = () => {
  return (
    <BrandDuplex title="Sign Up">
      <SignupForm />
      <SignupRedirectLogin />
    </BrandDuplex>
  );
};

export default Signup;
