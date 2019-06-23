const VERSION = '1.0.4';
const LAST_UPDATED = 'June 23 2019 11:15 AM';

//SkHome (SirKoik Home) object
var SkHome = new function() {
    // SkHome.populateTS
    // populate the time stamp field with a locale-friendly, concisely-formatted date and time.
    this.populateTS = () => {
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
    
    // SkHome.loadEvents
    // activate the panel link event listeners.
    var pane2Active = false;
    this.loadEvents = () => {
        var pane2Link = document.querySelector('.pane-2-link');

        pane2Link.addEventListener('click', () => {
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
            document.querySelector('.name-click').addEventListener('click', () => {
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
    
    // SkHome.loadBg
    // load background image after everything else so the page functionality is not dependent on the background image being fully loaded.
    this.loadBg = () => {
        var background = new Image();
        var src = 'images/Carnegiea_gigantea_near_Tucson_2-small.jpg';
        background.src = src;
        background.onload = () => {
//            document.getElementsByTagName('body')[0].style.backgroundImage = 'url("'+src+'")';
            document.querySelector('.flex-container').style.backgroundImage = 'url("'+src+'")';
            document.querySelector('.bg-loading').classList.add('hidden');
        }
    }
}

window.onload = () => {
    SkHome.populateTS();
    SkHome.loadEvents();    
}

// Try to load background last.
window.addEventListener('DOMContentLoaded', (event) => {
    SkHome.loadBg();
});