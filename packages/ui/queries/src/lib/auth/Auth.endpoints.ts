import { baseApi } from '../base/query/Api';
import { authUser } from './AuthUser.api';
import { login } from './Login.api';
import { logout } from './Logout.api';
import { signup } from './Signup.api';

export const authEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    authUser: authUser(builder),
    login: login(builder),
    signup: signup(builder),
    logout: logout(builder),
  }),
});

export const {
  useAuthUserQuery,
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
} = authEndpoints;
