const VERSION = '1.0.1b';
const LAST_UPDATED = 'May 26 2019 04:21 AM';

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
    this.loadEvents = function() {
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
        
        
        // on audio load
        document.getElementById('pronounce-name').addEventListener('canplaythrough', function() {
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
        });
    }
    
    // load background image after everything else so the page functionality is not dependent on the background image being fully loaded.
    this.loadBg = function() {
        var background = new Image();
        var src = 'images/Carnegiea_gigantea_near_Tucson_2.jpg';
        background.src = src;
        background.onload = function() {
            document.body.style.backgroundImage = 'url("'+src+'")';
            document.querySelector('.bg-loading').style.display = 'none';
        }
    }
}

window.onload = function() {
    skHome.populateTS();
    skHome.loadEvents();
    skHome.loadBg();
}