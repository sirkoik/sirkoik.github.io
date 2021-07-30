import { loadEmail } from './email/email.js';
import { loadEvents } from './audio/audio.js';
import { renderProjectList } from './project-list/project-list.js';
import { renderDateLastModified } from './date-last-modified/date-last-modified.js';

window.onload = () => {
    loadEmail();
    loadEvents();
    renderProjectList();
    renderDateLastModified();
}