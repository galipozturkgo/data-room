import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string().trim().required().email().min(3).max(255),
  firstName: Yup.string().trim().required().min(2).max(32),
  lastName: Yup.string().trim().required().min(2).max(32),
  password: Yup.string().trim().required().min(8).max(24),
  confirmPassword: Yup.string()
    .required()
    .min(8)
    .max(24)
    .test({
      name: 'notMatch',
      message: 'Passwords not matched',
      test: (confirmPassword, { parent }) =>
        confirmPassword === parent.password,
    }),
});
