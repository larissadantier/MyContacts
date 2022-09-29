import EventManager from '../lib/EventManager';

export const toastEventManager = new EventManager();

export const showToast = ({ type, text }) => {
  toastEventManager.emit('addToast', { type, text });
};
