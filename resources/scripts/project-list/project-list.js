import { projects } from './project-list-items.js';


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
        
        const listItem = document.createElement('li');
        const itemHTML = `<span class="list-item-spacer"><a href="${project.url}" target="_blank">${project.title}</a> ${project.description}</span>`;
    
        listItem.innerHTML = itemHTML;
        projectListHTML.appendChild(listItem);
    }
    
    container.appendChild(projectListHTML);
}