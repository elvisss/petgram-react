import React from 'react';
import Button from './styles';

const Submitbutton = ({
  children, disabled, onClick, type = 'buttom',
}) => (
  <Button onClick={onClick} disabled={disabled} type={type}>
    {children}
  </Button>
);

export default Submitbutton;
