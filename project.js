// const currentProject = JSON.parse(localStorage.getItem('currentProject'));

// if (currentProject) {
//     // Display project name
//     document.getElementById('project-heading').innerHTML = `${currentProject.name}`;

//     // Display tags
//     const tagsContainer = document.querySelector('.tags');
//     currentProject.tags.forEach(tag => {
//         const projectTag = document.createElement('span');
//         projectTag.className = 'tag';
//         projectTag.textContent = tag;
//         tagsContainer.appendChild(projectTag);
//     });

//     const toolsContainer = document.querySelector('.tools');
//     currentProject.tools.forEach(tool => {
//         const projectTool = document.createElement('span');
//         projectTool.className = 'tool';
//         projectTool.textContent = tool;
//         toolsContainer.appendChild(projectTool);
//     });

// };

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

//   // projectCard.addEventListener('click', () => {
//   //   localStorage.setItem('currentProject', JSON.stringify(project));

//   // });

//   const currentProject = JSON.parse(localStorage.getItem('currentProject'));

// if (currentProject) {
//     // Display project name
//     document.getElementById('project-heading').innerHTML = `${currentProject.name}`;

//     // Display tags
//     const tagsContainer = document.querySelector('.tags');
//     currentProject.tags.forEach(tag => {
//         const projectTag = document.createElement('span');
//         projectTag.className = 'tag';
//         projectTag.textContent = tag;
//         tagsContainer.appendChild(projectTag);
//     });

//     const toolsContainer = document.querySelector('.tools');
//     currentProject.tools.forEach(tool => {
//         const projectTool = document.createElement('span');
//         projectTool.className = 'tool';
//         projectTool.textContent = tool;
//         toolsContainer.appendChild(projectTool);
//     });

// };

//   projectCard.innerHTML = `
//     <div>
//       <img src="${project.image}" alt="${project.name}">
//       <h3>${project.name}</h3>
//     </div>
//   `
//   projectsContainer.appendChild(projectCard);

// });

// console.log(currentProject);

// const myHeading = new SplitType('#project-heading')

// gsap.to('.char', {
//     y: 0,
//     stagger: 0.05, 
//     delay: 0.1,
//     duration: .05,
//     ease: "elastic.in(1,0.3)"
// })

// const projectHeading = document.getElementById("project-heading");
// const desktopContainer = document.querySelector(".details");
// const mobileContainer = document.querySelector(".back-bar-heading");

// moveProjectHeading();
// window.addEventListener("resize", moveProjectHeading);

// function moveProjectHeading() {
//   if (window.innerWidth < 800) {
//     if (!mobileContainer.contains(projectHeading)) {
//       mobileContainer.appendChild(projectHeading);
//       console.log("mobile")
//     }
    
//   } else {
//     if (!desktopContainer.contains(projectHeading)) {
//       desktopContainer.insertBefore(projectHeading, desktopContainer.firstChild);
//       console.log("deskop");
//     }
//   }
// };

// const dropdownBtn = document.querySelector(".pro-dropdown");
// const proDetails = document.querySelector(".aside");

// function toggleDropdown() {
//     console.log("I've been toggled!");
//     proDetails.classList.toggle("activated");
//     dropdownBtn.classList.toggle("activated");
// };


// window.addEventListener('load', () => {

//     gsap.to('.detail', {
//       y: 0,
//       stagger: {
//         each: 0.1,
//         from: 'center',
//         grid: 'auto',
//         ease: 'power2.inOut',
//         repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
//       }
//     })
// });

// gsap.registerPlugin(ScrollTrigger);
// document.querySelectorAll(".fade").forEach((fadeAnimation) => {
//   gsap.to(fadeAnimation, {
//     scrollTrigger: {
//       trigger: fadeAnimation,
//       start: "top center",
      
//     }, 
//      opacity: 1,
//      duration: 0.5,
//      y: 10,
//      stagger: true,
//   })
  
// });

document.addEventListener("DOMContentLoaded", () => {
  // Retrieve current project from localStorage
  const storedProject = localStorage.getItem("currentProject");
  const currentProject = storedProject ? JSON.parse(storedProject) : null;

  if (currentProject) {
      const projectHeading = document.getElementById("project-heading");
      const tagsContainer = document.querySelector(".tags");
      const toolsContainer = document.querySelector(".tools");

      if (projectHeading) projectHeading.innerHTML = currentProject.name;
      
      if (tagsContainer) {
          tagsContainer.innerHTML = ""; // Clear existing tags
          currentProject.tags.forEach(tag => {
              const projectTag = document.createElement("span");
              projectTag.className = "tag";
              projectTag.textContent = tag;
              tagsContainer.appendChild(projectTag);
          });
      }

      if (toolsContainer) {
          toolsContainer.innerHTML = ""; // Clear existing tools
          currentProject.tools.forEach(tool => {
              const projectTool = document.createElement("span");
              projectTool.className = "tool";
              projectTool.textContent = tool;
              toolsContainer.appendChild(projectTool);
          });
      }
  }

  // Project Data
  const projects = [
      { 
          name: "Sundog Kombucha",
          image: "assets/project-images/project1/sundog-bottle.png",
          link: "project1.html",
          tags: ["packaging", "branding"],
          tools: ["Adobe Illustrator", "Adobe InDesign"]
      },
      { 
          name: "BearRabbit Taproom",
          image: "assets/project-images/project2/bearrabbit-paper.png",
          link: "project2.html",
          tags: ["logo design", "branding"],
          tools: ["Adobe Illustrator"]
      }
  ];

  const projectsContainer = document.getElementById("projectGrid");

  if (projectsContainer) {
      projects.forEach(project => {
          const projectCard = document.createElement("a");
          projectCard.classList.add("project-card", "fade");
          projectCard.href = project.link;

          projectCard.addEventListener("click", () => {
              localStorage.setItem("currentProject", JSON.stringify(project));
          });

          projectCard.innerHTML = `
              <div>
                  <img src="${project.image}" alt="${project.name}">
                  <h3>${project.name}</h3>
              </div>
          `;
          projectsContainer.appendChild(projectCard);
      });
  }

  // Tag Filtering
  document.addEventListener("click", event => {
      if (event.target.classList.contains("tag-item")) {
          event.target.classList.toggle("selected");
      }
  });

  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".fade").forEach(fadeAnimation => {
      gsap.to(fadeAnimation, {
          scrollTrigger: {
              trigger: fadeAnimation,
              start: "top center"
          }, 
          opacity: 1,
          duration: 0.5,
          y: 10,
          stagger: true,
      });
  });

  const myHeading = new SplitType("#project-heading");

  gsap.to(".char", {
      y: 0,
      stagger: 0.05, 
      delay: 0.1,
      duration: 0.05,
      ease: "elastic.in(1,0.3)"
  });

  const projectHeading = document.getElementById("project-heading");
  const desktopContainer = document.querySelector(".details");
  const mobileContainer = document.querySelector(".back-bar-heading");

  function moveProjectHeading() {
      if (window.innerWidth < 800) {
          if (!mobileContainer.contains(projectHeading)) {
              mobileContainer.appendChild(projectHeading);
          }
      } else {
          if (!desktopContainer.contains(projectHeading)) {
              desktopContainer.insertBefore(projectHeading, desktopContainer.firstChild);
          }
      }
  }

  moveProjectHeading();
  window.addEventListener("resize", moveProjectHeading);

  const dropdownBtn = document.querySelector(".pro-dropdown");
  const proDetails = document.querySelector(".aside");

  if (dropdownBtn) {
      dropdownBtn.addEventListener("click", () => {
          proDetails.classList.toggle("activated");
          dropdownBtn.classList.toggle("activated");
      });
  }
});

