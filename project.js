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

const myHeading = new SplitType('#project-heading')

gsap.to('.char', {
    y: 0,
    stagger: 0.05, 
    delay: 0.1,
    duration: .05,
    ease: "elastic.in(1,0.3)"
})



window.addEventListener('load', () => {

    gsap.to('.detail', {
      y: 0,
      stagger: {
        each: 0.1,
        from: 'center',
        grid: 'auto',
        ease: 'power2.inOut',
        repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
      }
    })
});

gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll(".fade").forEach((fadeAnimation) => {
  gsap.to(fadeAnimation, {
    scrollTrigger: {
      trigger: fadeAnimation,
      start: "top center",
      markers: true,
    }, 
     opacity: 1,
     duration: 0.5,
     y: 10,
     stagger: true,
  })
  
});


