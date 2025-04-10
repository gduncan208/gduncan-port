    // Nav Functionality

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
      };

      

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready captain!");
  
    activeNav();
  
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
  
  
    // Animations

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
      });
    });
  
    gsap.registerPlugin(ScrollTrigger);
  
    document.querySelectorAll(".fade").forEach((fadeAnimation, index) => {
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
      });
    });
  
    const myFirst = new SplitType('#my-last');
  
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: 0.1,
      ease: "elastic.in(1, 0.3)"
    });
  
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

      // Look into pinning!!!!
      
    
      
      const skillGrid = document.querySelector(".skill-list");
      
      console.log("skillGrid:", skillGrid); 
      
      if (skillGrid) {
        skills.forEach(skill => {
            const skillItem = document.createElement("li");
            skillItem.classList.add("skill-item");
      
            skillItem.innerHTML = `
                <div> </div> 
                <span>${skill.skillname}</span>
            `;
            skillGrid.appendChild(skillItem);
        });
      
  
  }});
  