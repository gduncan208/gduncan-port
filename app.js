
function toggleMenu(menu) {
  menu.classList.toggle('active');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.querySelector('body');
  mobileNav.classList.toggle('active');

  if (mobileNav.classList.contains('active')) {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }
}

// Project Card Population

const projects = [

  { 
    name: "BearRabbit Taproom",
    image: "assets/project-images/project1/bearrabbit-paper.png",
    link: "project1.html",
    tags: ["Logo Design, Branding"],
    tools: ["Adobe Illustator", "another"]
  },

  { 
    name: "Sundog Kombucha",
    image: "assets/project-images/project2/sundog-bottle.png",
    link: "project2.html",
    tags: ["Packaging, Branding"],
    tools: []
  }

];

const projectsContainer = document.getElementById("projectGrid");

projects.forEach(project => {
  const projectCard = document.createElement('a');
  projectCard.classList.add("project-card");
  projectCard.href = project.link;

  projectCard.addEventListener('click', () => {
    localStorage.setItem('currentProject', JSON.stringify(project));

  });

  projectCard.innerHTML = `
    <div>
      <img src="${project.image}" alt="${project.name}">
      <h3>${project.name}</h3>
    </div>
  `
  projectsContainer.appendChild(projectCard);
})
/* <div class="tags">
      ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
*/



// Lenis Smooth Scroll
const lenis = new Lenis({
    autoRaf: true,
  });
  
  lenis.on('scroll', (e) => {
    console.log(e);
  });

// h1 Stagger Animation

const myFirst = new SplitType('#my-last')

gsap.to('.char', {
    y: 0,
    stagger: 0.05, 
    delay: 0.5,
    duration: .1,
    ease: "elastic.in(1,0.3)"
})

// Scroll Triggers

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '',
        start: '',
        end: '',
        scrub: '',
        markers: true
    }
})

tl.to('', {
    
})

