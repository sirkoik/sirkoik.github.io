const VERSION = '1.0.6';
const LAST_UPDATED = 'February 1 2020 08:25 PM';

import {tiles} from './tiles.js';

//SkHome (SirKoik Home) object
let SkHome = new function() {
    // SkHome.populateTS
    // populate the time stamp field with a locale-friendly, concisely-formatted date and time.
    this.populateTS = () => {
        let dateUpdated = new Date(LAST_UPDATED);
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

    // SkHome.loadEvents
    // activate the panel link event listeners.
    let pane2Active = false;
    this.loadEvents = () => {
        let pane2Link = document.querySelector('.pane-2-link');

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
            let audioEl = document.getElementById('pronounce-name');
            //if (audioEl.ended) audioEl.play();
            audioEl.play();
        });

        document.querySelector('.name-click').textContent = 'Alexander Koik-Cestone 🔊';
        //});
    }

    // SkHome.loadTiles
    // Load all the "More..." link tiles.
    this.loadTiles = () => {
        // reverse order of tiles
        tiles.reverse();

        let container = document.querySelector('.flex-items-container');
        
        // generate tile HTML and add to DOM
        for (tile in tiles) {
            let tileDate = new Date(tiles[tile].date);
            const options = {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            };
            let date = tileDate.toLocaleDateString(tileDate, options);

            let el = document.createElement('div');
            el.style.backgroundImage = 'url("images/tiles/' + tiles[tile].name + '-sm.jpg")';
            el.title = tiles[tile].title + ' (' + date + ')';
            el.className = 'flex-item';

            let textEl = document.createElement('div');
            textEl.className = 'title-text';

            let textLink = document.createElement('a');
            textLink.href = tiles[tile].url;
            textLink.target = '_blank';
            
            let titleText = document.createTextNode(tiles[tile].title);
            textLink.appendChild(titleText);
            textEl.appendChild(textLink);
            el.appendChild(textEl);

            let title = document.createElement('a');
            title.className = 'bg';
            title.href = tiles[tile].url;
            title.target = '_blank';

            el.appendChild(title);

            container.appendChild(el);
        }
    }

    // SkHome.loadBg
    // load background image after everything else so the page functionality is not dependent on the background image being fully loaded.
    this.loadBg = () => {
        let background = new Image();
        const src = 'images/Carnegiea_gigantea_near_Tucson_2-small.jpg';
        
        background.src = src;
        background.onload = () => {
            //            document.getElementsByTagName('body')[0].style.backgroundImage = 'url("'+src+'")';
            document.querySelector('.flex-container').style.backgroundImage = 'url("' + src + '")';
            document.querySelector('.bg-loading').classList.add('hidden');
        }
    }
}

window.onload = () => {
    SkHome.populateTS();
    SkHome.loadEvents();
    SkHome.loadTiles();
}

// Try to load background last.
window.addEventListener('DOMContentLoaded', (event) => {
    SkHome.loadBg();
});
