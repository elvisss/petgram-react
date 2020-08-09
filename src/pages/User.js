import React, { useContext } from 'react';
import { Context } from '../Context';
import Submitbutton from '../components/Submitbutton';

const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1>User</h1>
      <Submitbutton onClick={removeAuth}>
        Cerrar Sesión
      </Submitbutton>
    </>
  );
};

export default User;
