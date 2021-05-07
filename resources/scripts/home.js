const VERSION = '1.1.1';
const LAST_UPDATED = 'May 7 2021 7:24 AM;

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
            pane2Link.textContent = 'Projects';
        } else {
            document.querySelector('.pane-2').style.display = 'block';
            pane2Link.textContent = 'Hide projects';
        }

        pane2Active = !pane2Active;
    });

    pane2Link.textContent = 'Projects';
    
    // make audio link clickable after audio file has finished loading.
    //let audioEl = document.getElementById('pronounce-name');
    
    let audio = new Audio();
    let audioUrl = './sounds/name.mp3';
    audio.src = audioUrl;
    audio.load();
    
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
    }
    
    audio.addEventListener('canplaythrough', finishLoadingAudio, false);
    
    //audioEl.addEventListener('canplaythrough', finishLoadingAudio);
    // explanation for the below line: https://stackoverflow.com/questions/10235919/the-canplay-canplaythrough-events-for-an-html5-video-are-not-called-on-firefox
    //if (audioEl.readyState > 3) finishLoadingAudio(); 
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

window.onload = () => {
    loadEvents();
    loadTiles();
    populateTS();
}

// Try to load background last.
window.addEventListener('DOMContentLoaded', (event) => {
    //loadBg();
});