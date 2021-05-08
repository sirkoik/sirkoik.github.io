import * as appConstants from './app-constants.js';
import { loadEvents } from './audio/audio.js';
import { renderProjectList } from './project-list/project-list.js';

// populateTS: populate the time stamp field with a locale-friendly, concisely-formatted date and time.
const populateTS = () => {
    let dateUpdated = new Date(appConstants.LAST_UPDATED);
    const options = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    let date = dateUpdated.toLocaleDateString(dateUpdated, options);
    date = date.replace(',', '');
    document.getElementById('edit_timestamp').textContent = date;
}

window.onload = () => {
    loadEvents();
    renderProjectList();
    populateTS();
}