import React from 'react';
import Context from '../Context';
import UserForm from '../components/UserForm';
import RegisterMutation from '../container/RegisterMutation';

const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => (
      <>
        <RegisterMutation>
          {(register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              register({ variables }).then(activateAuth);
            };
            const errorMsg = error && 'Usuario ya existe o hay algún problema.';
            return (
              <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Sign Up" />
            );
          }}
        </RegisterMutation>
        <UserForm onSubmit={activateAuth} title="Sign In" />
      </>
    )}
  </Context.Consumer>
);

export default NotRegisteredUser;
