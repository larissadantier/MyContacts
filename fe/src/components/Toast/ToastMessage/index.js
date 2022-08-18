import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ToastMessage({ text }) {
  return (
    <Container>
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
};
