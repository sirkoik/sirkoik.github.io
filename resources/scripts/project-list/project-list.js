import { projects } from './project-list-items.js';

// renderProjectList: Output the project list to the DOM.
export const renderProjectList = () => {
    let container = document.querySelector('.project-container');

    // reverse order of projects to place the newest first
    projects.reverse();
    
    // generate tile HTML and add to DOM
    for (const tile of projects) {
        let tileDate = new Date(tile.date);
        const options = {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };
        let date = tileDate.toLocaleDateString(tileDate, options);

        let el = document.createElement('a');
        
        const backgrounds = [
            'linear-gradient(to bottom right, lime, forestgreen)',
//            'url("./resources/images/tiles/' + tile.name + '-sm.jpg")',
//            'linear-gradient(120deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
//            'linear-gradient(120deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))'
        ];
        
        el.style.background = backgrounds.join(', ');
        el.style.backgroundPosition = 'center';
        el.style.backgroundSize = 'cover';
        el.style.backgroundBlendMode = 'hard-light';
        
        el.title = tile.title + ' (' + date + ')';
//        el.className = 'flex-item';

//        let textEl = document.createElement('div');
//        textEl.className = 'title-text';

        //let textLink = document.createElement('a');
        //textLink.href = tile.url;
        //textLink.target = '_blank';
        el.href = tile.url;
        el.target = '_blank';

        let titleText = document.createTextNode(tile.title);
        el.appendChild(titleText);
        //textEl.appendChild(textLink);
        //el.appendChild(textEl);
        //el.appendChild(textLink);

//        let title = document.createElement('a');
//        title.className = 'bg';
//        title.href = tile.url;
//        title.target = '_blank';
//
//        el.appendChild(title);

        container.appendChild(el);
    }
}