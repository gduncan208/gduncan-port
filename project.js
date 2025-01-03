const currentProject = JSON.parse(localStorage.getItem('currentProject'));

if (currentProject) {
    // Display project name
    document.getElementById('project-heading').innerHTML = `${currentProject.name}`;

    // Display tags
    const tagsContainer = document.querySelector('.tags');
    currentProject.tags.forEach(tag => {
        const projectTag = document.createElement('span');
        projectTag.className = 'tag';
        projectTag.textContent = tag;
        tagsContainer.appendChild(projectTag);
    });

    const toolsContainer = document.querySelector('.tools');
    currentProject.tools.forEach(tool => {
        const projectTool = document.createElement('span');
        projectTool.className = 'tool';
        projectTool.textContent = tool;
        toolsContainer.appendChild(projectTool);
    });

};

console.log(currentProject);


