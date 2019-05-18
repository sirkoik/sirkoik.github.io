const VERSION = 1.0;
const LAST_UPDATED = 1558136678052; // timestamp

var skHome = new function() {
    
    // populate the time stamp fiold with a locale-friendly, concisely-formatted date and time.
    this.populateTS = function() {
        var dateUpdated = new Date(LAST_UPDATED);
        var options = {
            month:  'numeric', 
            day:    'numeric', 
            year:   'numeric', 
            hour:   'numeric', 
            minute: 'numeric'
        };
        var date = dateUpdated.toLocaleDateString(dateUpdated, options);
        date = date.replace(',', '');
        document.getElementById('edit_timestamp').innerHTML = date; 
    }
}

window.onload = function() {
    skHome.populateTS();
}