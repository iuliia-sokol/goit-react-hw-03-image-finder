import PropTypes from 'prop-types';
import { BtnElement } from './Button.styled';

export const Btn = ({
  text,
  status,
  disabled = false,
  icon: Icon = null,
  type = 'button',
  onClick = null,
  onSubmit = null,
}) => {
  return (
    <BtnElement
      status={status}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {Icon && <Icon></Icon>}
      {text}
    </BtnElement>
  );
};

Btn.propTypes = {
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  status: PropTypes.string,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};
