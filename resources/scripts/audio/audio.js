export const loadEvents = () => {
    document.querySelector('.name-click').addEventListener('click', onClickName);
}

const onClickName = (e) => {
    e.preventDefault();
    // ignore spam clicks
    if (!audio || audio.ended) playName();
}

const playName = () => {
    if (audio) {
        audio.play();
    } else {
        setupAudio();
    }
}

let audio = null;
const setupAudio = () => {
    const audioUrl = './resources/sounds/name.mp3';    
    
    audio = new Audio();
    audio.src = audioUrl;
    audio.load();
    
    document.body.appendChild(audio);
    
    audio.addEventListener('error', (e) => {
        alert('Audio failed to load. Try refreshing or re-connecting.');
    });
    
    audio.addEventListener('canplaythrough', () => {
        audio.play();
    });    
};