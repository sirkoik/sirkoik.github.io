const VERSION = 1.0;
const LAST_UPDATED = 1558117727089; // timestamp

var skHome = new function() {
    this.populateTS = function() {
        var dateUpdated = new Date(LAST_UPDATED);
        //var options = {};
        var date = dateUpdated.toDateString(dateUpdated); // try using toLocaleDateString for more options
        document.getElementById('ts').innerHTML = date; 
    }
}

window.onload = function() {
    skHome.populateTS();
}