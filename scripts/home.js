const VERSION = 1.0;
const LAST_UPDATED = 'May 18 2019 11:25 AM';

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
    
    document.querySelector('.pane-2-link').addEventListener('click', function() {
        document.querySelector('.pane-1').style.display = 'none';
        document.querySelector('.pane-2').style.display = 'block';
    });
    
    document.querySelector('.pane-1-link').addEventListener('click', function() {
        document.querySelector('.pane-2').style.display = 'none';
        document.querySelector('.pane-1').style.display = 'block';
    });    
}