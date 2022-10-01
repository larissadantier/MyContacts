import { useCallback, useState, useEffect } from 'react';

import { toastEventManager } from '../../../utils/showToast';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    toastEventManager.on('addToast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addToast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id));
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}
