const VERSION = 1.0;
const LAST_UPDATED = 'May 18 2019 11:47 AM';

var skHome = new function() {
    
    // populate the time stamp field with a locale-friendly, concisely-formatted date and time.
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
    
    // activate the panel link event listeners.
    this.activatePanels = function() {
        var pane2Link = document.querySelector('.pane-2-link');

        pane2Link.addEventListener('click', function() {
            document.querySelector('.pane-1').style.display = 'none';
            document.querySelector('.pane-2').style.display = 'block';
        });

        document.querySelector('.pane-1-link').addEventListener('click', function() {
            document.querySelector('.pane-2').style.display = 'none';
            document.querySelector('.pane-1').style.display = 'block';
        });
        
        pane2Link.innerHTML = 'More...';
    }
    
    // load background image after everything else so the page functionality is not dependent on the background image being fully loaded.
    this.loadBg = function() {
        var background = new Image();
        var src = 'images/Carnegiea_gigantea_near_Tucson_2.jpg';
        background.src = src;
        background.onload = function() {
            document.getElementsByTagName('body')[0].style.backgroundImage = 'url("'+src+'")';
            document.querySelector('.bg-loading').style.display = 'none';
        }
    }
}

window.onload = function() {
    skHome.populateTS();
    skHome.activatePanels();
    skHome.loadBg();
}