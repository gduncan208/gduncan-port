
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

function activeNav() {
  const navLinks = document.querySelectorAll('.link');
  const currentPage = window.location.href;

  navLinks.forEach((navLink) => {
    if (currentPage.includes(navLink.href)) {
      navLink.classList.add('active-n');
      navLink.classList.remove('link');
    } else {
      navLink.classList.remove('active-n');
    }
  });
}

document.addEventListener('DOMContentLoaded', activeNav);



// Project Card Population

const projects = [
  { 
    name: "Sundog Kombucha",
    image: "assets/project-images/project1/sundog-bottle.png",
    link: "project1.html",
    tags: ["Packaging", "Branding"],
    tools: ["adobe illustator", "adobe indesign"]
  },
  { 
    name: "BearRabbit Taproom",
    image: "assets/project-images/project2/bearrabbit-paper.png",
    link: "project2.html",
    tags: ["logo design", "branding"],
    tools: ["adobe illustator"]
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

