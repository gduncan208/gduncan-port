
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



// // Project Card Population

// const projects = [
//   { 
//     name: "Sundog Kombucha",
//     image: "assets/project-images/project1/sundog-bottle.png",
//     link: "project1.html",
//     tags: ["packaging", "branding"],
//     tools: ["adobe illustator", "adobe indesign"]
//   },
//   { 
//     name: "BearRabbit Taproom",
//     image: "assets/project-images/project2/bearrabbit-paper.png",
//     link: "project2.html",
//     tags: ["logo design", "branding"],
//     tools: ["adobe illustator"]
//   },
//   { 
//     name: "Sundog Kombucha",
//     image: "assets/project-images/project1/sundog-bottle.png",
//     link: "project1.html",
//     tags: ["packaging", "branding"],
//     tools: ["adobe illustator", "adobe indesign"]
//   },
//   { 
//     name: "BearRabbit Taproom",
//     image: "assets/project-images/project2/bearrabbit-paper.png",
//     link: "project2.html",
//     tags: ["logo design", "branding"],
//     tools: ["adobe illustator"]
//   },
//   { 
//     name: "Sundog Kombucha",
//     image: "assets/project-images/project1/sundog-bottle.png",
//     link: "project1.html",
//     tags: ["packaging", "branding"],
//     tools: ["adobe illustator", "adobe indesign"]
//   },
//   { 
//     name: "BearRabbit Taproom",
//     image: "assets/project-images/project2/bearrabbit-paper.png",
//     link: "project2.html",
//     tags: ["logo design", "branding"],
//     tools: ["adobe illustator"]
//   }

// ];

// const tagItem = document.querySelectorAll(".tag-item");

// tagItem.forEach(tagItem => {
//   tagItem.addEventListener("click", filterProjects);
// });

// function filterProjects(){
//   this.classList.toggle("selected");
// };

// const projectsContainer = document.getElementById("projectGrid");

// projects.forEach(project => {

//   const projectCard = document.createElement('a');
//   projectCard.classList.add("project-card");
//   projectCard.classList.add("fade");
//   projectCard.href = project.link;

//   projectCard.addEventListener('click', () => {
//     localStorage.setItem('currentProject', JSON.stringify(project));

//   });

//   projectCard.innerHTML = `
//     <div>
//       <img src="${project.image}" alt="${project.name}">
//       <h3>${project.name}</h3>
//     </div>
//   `
//   projectsContainer.appendChild(projectCard);

// });

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
gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll(".fade").forEach((fadeAnimation) => {
  gsap.to(fadeAnimation, {
    scrollTrigger: {
      trigger: fadeAnimation,
      start: "top center",
      
    }, 
     opacity: 1,
     duration: 0.5,
     y: 10,
     stagger: true,
  })
  
});


const myHeading = new SplitType('#project-heading')

gsap.to('.char', {
    y: 0,
    stagger: 0.05, 
    delay: 0.1,
    duration: .05,
    ease: "elastic.in(1,0.3)"
})

const projectHeading = document.getElementById("project-heading");
const desktopContainer = document.querySelector(".details");
const mobileContainer = document.querySelector(".back-bar-heading");

moveProjectHeading();
window.addEventListener("resize", moveProjectHeading);

function moveProjectHeading() {
  if (window.innerWidth < 800) {
    if (!mobileContainer.contains(projectHeading)) {
      mobileContainer.appendChild(projectHeading);
      console.log("mobile")
    }
    
  } else {
    if (!desktopContainer.contains(projectHeading)) {
      desktopContainer.insertBefore(projectHeading, desktopContainer.firstChild);
      console.log("deskop");
    }
  }
};

const dropdownBtn = document.querySelector(".pro-dropdown");
const proDetails = document.querySelector(".aside");

function toggleDropdown() {
    console.log("I've been toggled!");
    proDetails.classList.toggle("activated");
    dropdownBtn.classList.toggle("activated");
};


window.addEventListener('load', () => {

    gsap.to('.detail', {
      y: 0,
      stagger: {
        each: 0.1,
        from: 'center',
        grid: 'auto',
        ease: 'power2.inOut',
        repeat: -1 
      }
    })
});

gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll(".fade").forEach((fadeAnimation) => {
  gsap.to(fadeAnimation, {
    scrollTrigger: {
      trigger: fadeAnimation,
      start: "top center",
      
    }, 
     opacity: 1,
     duration: 0.5,
     y: 10,
     stagger: true,
     delay: index * 0.1,
     once: true,
  })
  
});









