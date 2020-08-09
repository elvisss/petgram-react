import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles';

const Submitbutton = ({
  children, disabled, onClick, type = 'buttom',
}) => (
  <Button onClick={onClick} disabled={disabled} type={type}>
    {children}
  </Button>
);

Submitbutton.defaultProps = {
  disabled: false,
  onClick: () => {},
};

Submitbutton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Submitbutton;
