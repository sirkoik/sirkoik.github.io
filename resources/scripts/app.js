import { loadEmailNoCaptcha } from './email/email.js';
import { loadEvents } from './audio/audio.js';
import { loadModal } from './modal/modal.js';

window.onload = () => {
  loadModal();
  loadEmailNoCaptcha();
  loadEvents();
};
