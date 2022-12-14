import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Container, Footer, Overlay } from './styles';

export default function Modal({
  title,
  children,
  isLoading,
  danger,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  visible,
}) {
  if (!visible) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>

        <div className="modal-body">
          {children}
        </div>

        <Footer>
          <button
            type="button"
            className="btn-cancel"
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelLabel}

          </button>
          <Button
            type="button"
            danger={danger}
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  isLoading: PropTypes.bool,
  danger: PropTypes.bool,
  visible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  isLoading: false,
  danger: false,
  visible: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
