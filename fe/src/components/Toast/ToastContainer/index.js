import ToastMessage from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Default toast" />
      <ToastMessage text="Error toast" />
      <ToastMessage text="Success toast" />
    </Container>
  );
}
