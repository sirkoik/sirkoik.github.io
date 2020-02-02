const VERSION = '1.0.6';
const LAST_UPDATED = 'February 1 2020 08:25 PM';

//SkHome (SirKoik Home) object
var SkHome = new function () {
    // SkHome.populateTS
    // populate the time stamp field with a locale-friendly, concisely-formatted date and time.
    this.populateTS = () => {
        var dateUpdated = new Date(LAST_UPDATED);
        var options = {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
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

    // SkHome.loadTiles
    // Load all the "More..." link tiles.
    this.loadTiles = () => {
        var tiles = [
            {
                name: 'tile-1',
                title: 'SirKoik\'s Quizlet',
                url: 'https://quizlet.com/SirKoik',
                date: 'Jan 1 2015 00:00 AM'
            },
            {
                name: 'tile-2',
                title: 'SirKoik\'s JS Fiddles',
                url: 'https://jsfiddle.net/user/SirKoik/fiddles/',
                date: 'Jan 1 2015 00:00 AM'
            },
            {
                name: 'tile-3',
                title: 'Happy Mother\'s Day!',
                url: 'Mothers-Day-2019/',
                date: 'May 24 2019 01:26 AM'
            },
            {
                name: 'tile-4',
                title: 'Countdown to New Year\'s',
                url: 'New-Years-Countdown/',
                date: 'May 26 2019 02:11 AM'
            },
            {
                name: 'tile-5',
                title: 'Happy St. Patrick\'s Day!',
                url: 'StPatricksDay',
                date: 'March 18 2019 12:19 AM'
            },
            {
                name: 'tile-6',
                title: 'Happy Birthday, BJ!',
                url: 'BJ2019/',
                date: 'March 31 2019 01:45 PM'
            },
            {
                name: 'tile-7',
                title: 'Happy Easter!',
                url: 'Jerusalem-Cross/',
                date: 'April 28 2019 05:13 PM'
            },
            {
                name: 'tile-8',
                title: 'Jokes',
                url: 'Jokes/',
                date: 'July 11 2019 10:54 AM'
            },
            {
                name: 'tile-9',
                title: 'Analog Clock',
                url: 'Analog-Clock/',
                date: 'August 4 2019 06:49 PM'
            },
            {
                name: 'tile-10',
                title: 'Christmas Comet Story',
                url: 'BorisovXmas/',
                date: 'December 10 2019 08:12 AM'
            },
            {
                name: 'tile-11',
                title: 'Snowy Scene',
                url: 'FallingObjects/',
                date: 'January 15 2020 03:25 PM'
            },
            {
                name: 'tile-12',
                title: 'February',
                url: 'February/',
                date: 'February 1 2020 08:20 PM'                
            }
        ];

        // reverse order
        tiles.reverse();

        for (tile in tiles) {

            let tileDate = new Date(tiles[tile].date);
            var options = {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            };
            var date = tileDate.toLocaleDateString(tileDate, options);


            var el = document.createElement('div');
            el.style.backgroundImage = 'url("images/tiles/' + tiles[tile].name + '-sm.jpg")';
            el.title = tiles[tile].title + ' (' + date + ')';
            el.className = 'flex-item';

            var textEl = document.createElement('div');
            textEl.className = 'title-text';

            var textLink = document.createElement('a');
            textLink.href = tiles[tile].url;
            textLink.target = '_blank';
            var titleText = document.createTextNode(tiles[tile].title);
            textLink.appendChild(titleText);
            textEl.appendChild(textLink);
            el.appendChild(textEl);


            var title = document.createElement('a');
            title.className = 'bg';
            title.href = tiles[tile].url;
            title.target = '_blank';


            el.appendChild(title);

            console.log(el);

            document.querySelector('.flex-items-container').appendChild(el);
        }
    }

    // SkHome.loadBg
    // load background image after everything else so the page functionality is not dependent on the background image being fully loaded.
    this.loadBg = () => {
        var background = new Image();
        var src = 'images/Carnegiea_gigantea_near_Tucson_2-small.jpg';
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
