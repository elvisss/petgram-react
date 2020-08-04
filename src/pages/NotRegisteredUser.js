import React, { useContext } from 'react';
import { Context } from '../Context';
import UserForm from '../components/UserForm';
import RegisterMutation from '../container/RegisterMutation';
import LoginMutation from '../container/LoginMutation';

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register, { loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup: token } = data;
              activateAuth(token);
            });
          };
          const errorMsg = error && 'Usuario ya existe o hay algún problema.';
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title="Sign Up"
            />
          );
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login: token } = data;
              activateAuth(token);
            });
          };
          const errorMsg = error && 'Contraseña incorrecta o el usuario no existe.';
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title="Sign In"
            />
          );
        }}
      </LoginMutation>
    </>
  );
};

export default NotRegisteredUser;
