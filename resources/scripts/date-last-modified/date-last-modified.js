import * as appConstants from '../app-constants.js';

const dateOptions = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};

// renderDateLastModified: populate the time stamp field with a locale-friendly, concisely-formatted date and time.
export const renderDateLastModified = () => {
    let dateUpdated = new Date(appConstants.LAST_UPDATED);
    let date = dateUpdated.toLocaleDateString(undefined, dateOptions);
    date = date.replace(',', '');
    
    const dateText = document.createTextNode(date);
    document.querySelector('#last-edited').appendChild(dateText);
}