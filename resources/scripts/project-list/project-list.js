import { projects } from './project-list-items.js';
import { techTypes } from './tech-types.js';

//const dateFormat = {
//    month: 'numeric',
//    day: 'numeric',
//    year: 'numeric',
//    hour: 'numeric',
//    minute: 'numeric'
//};


// renderProjectList: Output the project list to the DOM.
export const renderProjectList = () => {
    const container = document.querySelector('.project-container');

    // reverse order of projects to place the newest first
    projects.reverse();
    
    // generate project HTML and add to DOM
    const projectListHTML = document.createElement('ol');
    
    for (const project of projects) {
        //const projectDate = new Date(project.date).toLocaleDateString(undefined, dateFormat);
        
        let technologies = '';
        if (project.technologies) {
            technologies = ' ' + project.technologies.map(technology => {
                const tech = techTypes[technology];
                return `<img onclick="alert('Technology type: ${tech.name}');" class="tech-image" src="./resources/images/icons/technologies/${tech.image}" alt=${tech.name} title=${tech.name} />`;
            }).join('');
        }

        let longDesc = '';
        if (project.longDescription) {
            longDesc = '<ol class="skills">';
            longDesc += project.longDescription.map(item => `<li><span class="list-item-spacer">${item}</span></li>`).join('\n');
            longDesc += '</ol>';
        }

        const listItem = document.createElement('li');
        const itemHTML = `<span class="list-item-spacer"><a href="${project.url}" target="_blank">${project.title}</a> ${project.description}${technologies}${longDesc}</span>`;
    
        listItem.innerHTML = itemHTML;
        projectListHTML.appendChild(listItem);
    }
    
    container.appendChild(projectListHTML);
}