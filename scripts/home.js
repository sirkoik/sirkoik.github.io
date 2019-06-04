const VERSION = '1.0.2';
const LAST_UPDATED = 'June 4 2019 05:40 AM';

//skHome (SirKoik Home) object
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
        document.getElementById('edit_timestamp').textContent = date;
    }
    
    // activate the panel link event listeners.
    var pane2Active = false;
    this.loadEvents = function() {
        var pane2Link = document.querySelector('.pane-2-link');

        pane2Link.addEventListener('click', function() {
            //document.querySelector('.pane-1').style.display = 'none';
            if (pane2Active) {
                document.querySelector('.pane-2').style.display = 'none';
                pane2Link.textContent = 'More...';
            } else {
                document.querySelector('.pane-2').style.display = 'block';
                pane2Link.textContent = 'Less...';                
            }
            
            pane2Active = !pane2Active;
        });
        
        pane2Link.textContent = 'More...';
        
        
        // on audio load
        //document.getElementById('pronounce-name').addEventListener('canplaythrough', function() {
            // make title clickable / tappable
            document.querySelector('.name-click').addEventListener('click', function() {
                for (el of document.querySelectorAll('.name-phonetic')) {
                    el.classList.remove('hidden');
                }
                var audioEl = document.getElementById('pronounce-name');
                //if (audioEl.ended) audioEl.play();
                audioEl.play();
            });
            
            document.querySelector('.name-click').textContent = 'Alexander Koik-Cestone 🔊';
        //});
    }
    
    // load background image after everything else so the page functionality is not dependent on the background image being fully loaded.
    this.loadBg = function() {
        var background = new Image();
        var src = 'images/Carnegiea_gigantea_near_Tucson_2.jpg';
        background.src = src;
        background.onload = function() {
            document.getElementsByTagName('body')[0].style.backgroundImage = 'url("'+src+'")';
            document.querySelector('.bg-loading').classList.add('hidden');
        }
    }
}

// DOM-dependent functions
window.addEventListener('DOMContentLoaded', (event) => {
    skHome.populateTS();
    skHome.loadEvents();
    skHome.loadBg();
});