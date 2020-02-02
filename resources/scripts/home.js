const VERSION = '1.0.7';
const LAST_UPDATED = 'February 1 2020 11:12 PM';

// SkHome.loadEvents
// activate the panel link event listeners.
let pane2Active = false;
function loadEvents() {
    // toggle pane.
    
    let pane2Link = document.querySelector('.pane-2-link');
    pane2Link.addEventListener('click', (e) => {
        e.preventDefault();
        
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
    
    // make audio link clickable after audio file has finished loading.
    let audioEl = document.getElementById('pronounce-name');
    const finishLoadingAudio = function() {
        // make title clickable / tappable
        document.querySelector('.name-click').addEventListener('click', (e) => {
            e.preventDefault();
            
            for (let el of document.querySelectorAll('.name-phonetic')) {
                el.classList.remove('hidden');
            }
            let audioEl = document.getElementById('pronounce-name');
            //if (audioEl.ended) audioEl.play();
            audioEl.play();
        });

        document.querySelector('.name-click').textContent = 'Alexander Koik-Cestone 🔊';
    }
    
    audioEl.addEventListener('canplaythrough', finishLoadingAudio);
    // explanation for the below line: https://stackoverflow.com/questions/10235919/the-canplay-canplaythrough-events-for-an-html5-video-are-not-called-on-firefox
    if (audioEl.readyState > 3) finishLoadingAudio(); 
}

// loadJSON: load a JSON file. Return as Promise.
function loadJSON(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            const data = request.response;
            resolve(data);
        }
    });
}


// loadTiles: load all the "More..." link tiles.
async function loadTiles() {
    
    let url = './../resources/json/tiles.json';
    let tiles = await loadJSON(url);
    
    // reverse order of tiles
    tiles.reverse();
    
    let container = document.querySelector('.flex-items-container');

    // generate tile HTML and add to DOM
    for (const tile of tiles) {
        let tileDate = new Date(tile.date);
        const options = {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };
        let date = tileDate.toLocaleDateString(tileDate, options);

        let el = document.createElement('div');
        el.style.backgroundImage = 'url("./resources/images/tiles/' + tile.name + '-sm.jpg")';
        el.title = tile.title + ' (' + date + ')';
        el.className = 'flex-item';

        let textEl = document.createElement('div');
        textEl.className = 'title-text';

        let textLink = document.createElement('a');
        textLink.href = tile.url;
        textLink.target = '_blank';

        let titleText = document.createTextNode(tile.title);
        textLink.appendChild(titleText);
        textEl.appendChild(textLink);
        el.appendChild(textEl);

        let title = document.createElement('a');
        title.className = 'bg';
        title.href = tile.url;
        title.target = '_blank';

        el.appendChild(title);

        container.appendChild(el);
    }
}

// populateTS: populate the time stamp field with a locale-friendly, concisely-formatted date and time.
function populateTS() {
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

// loadBg: load background image after everything else to make sure that more important interactive elements are not competing for bandwidth.
function loadBg() {
    let background = new Image();
    const src = './resources/images/backgrounds/Carnegiea_gigantea_near_Tucson_2-small.jpg';

    background.src = src;
    background.onload = () => {
        document.querySelector('.flex-container').style.backgroundImage = 'url("' + src + '")';
        document.querySelector('.bg-loading').classList.add('hidden');
    }
}

window.onload = () => {
    loadEvents();
    loadTiles();
    populateTS();
}

// Try to load background last.
window.addEventListener('DOMContentLoaded', (event) => {
    loadBg();
});