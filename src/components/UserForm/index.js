/* eslint-disable object-curly-newline */
import React from 'react';
import useInputValue from '../../hooks/useInputValue';
import { Form, Input, Button, Title, Error } from './styles';

const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          required
          type="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
        />
        <Input
          disabled={disabled}
          required
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={password.onChange}
        />
        <Button disabled={disabled} type="submit">
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default UserForm;
