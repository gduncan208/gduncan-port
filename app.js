document.addEventListener("DOMContentLoaded", () =>{
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
  
  
  
  
  
  // Lenis Smooth Scroll
  const lenis = new Lenis({
      autoRaf: true,
    });
    
    lenis.on('scroll', (e) => {
      console.log(e);
    });
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('trigger');
          observer.unobserve(entry.target);
        }
      });
    });
    
    const items = document.querySelectorAll('.about-line');
    items.forEach(item => observer.observe(item));
  
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
  
  const aboutMeLine = document.querySelector("about-l-line");
  
  function setMobileAbout() {
    
  };
  
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
  
  const skills = [
    { 
        skillSvg: "assets/skillSVG/illustrator-svgrepo-com.svg",
        skillname: "Illustrator",
    },
    { 
        skillSvg: "assets/skillSVG/adobe-photoshop-svgrepo-com.svg",
        skillname: "Photoshop",
    },
    { 
      skillSvg: "assets/skillSVG/indesign-svgrepo-com (1).svg",
      skillname: "Indesign",
    },
    { 
      skillSvg: "assets/skillSVG/html5-01-svgrepo-com (1).svg",
      skillname: "HTML",
    },
    { 
      skillSvg: "assets/skillSVG/css3-01-svgrepo-com.svg",
      skillname: "CSS",
    },
  ];
  
  const skillGrid = document.querySelectorAll(".proficient-items");
  
  console.log(skillGrid);
  
  if (skillGrid) {
    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.classList.add("skill-item");
  
        skillItem.innerHTML = `
          <span>${skill.skillname}</span>
        `;
        skillGrid.appendChild(skillItem);
    });
  }
  
  
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
})
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



// Lenis Smooth Scroll
const lenis = new Lenis({
    autoRaf: true,
  });
  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('trigger');
        observer.unobserve(entry.target);
      }
    });
  });
  
  const items = document.querySelectorAll('.about-line');
  items.forEach(item => observer.observe(item));

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

const aboutMeLine = document.querySelector("about-l-line");

function setMobileAbout() {
  
};

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

const skills = [
  { 
      skillSvg: "assets/skillSVG/illustrator-svgrepo-com.svg",
      skillname: "Illustrator",
  },
  { 
      skillSvg: "assets/skillSVG/adobe-photoshop-svgrepo-com.svg",
      skillname: "Photoshop",
  },
  { 
    skillSvg: "assets/skillSVG/indesign-svgrepo-com (1).svg",
    skillname: "Indesign",
  },
  { 
    skillSvg: "assets/skillSVG/html5-01-svgrepo-com (1).svg",
    skillname: "HTML",
  },
  { 
    skillSvg: "assets/skillSVG/css3-01-svgrepo-com.svg",
    skillname: "CSS",
  },
];

const skillGrid = document.querySelector(".proficient-items");


if (skillGrid) {
  skills.forEach(skill => {
      const skillItem = document.createElement("li");
      skillItem.classList.add("skill-item");

      skillItem.innerHTML = `
             
              <span>${skill.skillname}</span>
      `;
      skillGrid.appendChild(skillItem);
  });
}

console.log(skillGrid);

 // < src="${skill.skillSvg}" alt="${skill.skillname}">




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









