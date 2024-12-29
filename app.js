
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

