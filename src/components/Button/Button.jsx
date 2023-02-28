import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

export const Button = ({ type = 'button', onClick, text }) => {
  return (
    <Btn type={type} onClick={onClick}>
      {text}
    </Btn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
