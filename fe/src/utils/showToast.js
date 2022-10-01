import EventManager from '../lib/EventManager';

export const toastEventManager = new EventManager();

export const showToast = ({ type, text, duration }) => {
  toastEventManager.emit('addToast', { type, text, duration });
};
