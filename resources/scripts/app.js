import { loadEmailNoCaptcha } from './email/email.js';
import { loadEvents } from './audio/audio.js';
// import { renderProjectList } from './project-list/project-list.js';
import { renderDateLastModified } from './date-last-modified/date-last-modified.js';
import { loadModal } from './modal/modal.js';

window.onload = () => {
  loadModal();
  loadEmailNoCaptcha();
  loadEvents();
  // renderProjectList();
  renderDateLastModified();
};
