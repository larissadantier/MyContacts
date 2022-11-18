import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { StyledButton } from './styles';

export default function Button({
  type,
  disabled,
  isLoading,
  children,
  danger,
  onClick,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      danger={danger}
      onClick={onClick}
    >
      {isLoading ? <Spinner size={16} /> : children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  disabled: false,
  danger: false,
  onClick: undefined,
};
