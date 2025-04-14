

document.addEventListener("DOMContentLoaded", () => {
  const storedProject = localStorage.getItem("currentProject");
  const currentProject = storedProject ? JSON.parse(storedProject) : null;

  if (currentProject) {
      const projectHeading = document.getElementById("project-heading");
      const tagsContainer = document.querySelector(".tags");
      const toolsContainer = document.querySelector(".tools");
      const awardsContainer = document.querySelector(".awards");
      const projectGallery = document.getElementById("projectDisplay");

      if (projectHeading) projectHeading.innerHTML = currentProject.name;

    //   if (awardsContainer) {
    //     toolsContainer.innerHTML = ""; 
    //     currentProject.awards.forEach(award => {
    //         const projectAward = document.createElement("a");
    //         projectAward.className = "award";
    //         projectAward.src = award;
    //         awardsContainer.appendChild(projectAward);
    //     });
    // }
      
      if (tagsContainer) {
          tagsContainer.innerHTML = ""; 
          currentProject.tags.forEach(tag => {
              const projectTag = document.createElement("span");
              projectTag.className = "tag";
              projectTag.textContent = tag;
              tagsContainer.appendChild(projectTag);
          });
      }

      if (toolsContainer) {
          toolsContainer.innerHTML = ""; 
          currentProject.tools.forEach(tool => {
              const projectTool = document.createElement("span");
              projectTool.className = "tool";
              projectTool.textContent = tool;
              toolsContainer.appendChild(projectTool);
          });
      }

      if (projectGallery) {
        projectGallery.innerHTML = ""; 
        currentProject.gallery.forEach(gImg => {
            const projectGalleryImg = document.createElement("img");
            projectGalleryImg.className = "pro-img";
            projectGalleryImg.src = gImg;
            projectGallery.appendChild(projectGalleryImg);
        });

        
    }
  }

  // Project Data
  const projects = [
      { 
          name: "Sundog Kombucha",
          image: "assets/project-images/project1/sundog-bottle.png",
          link: "project.html",
          awards: "",
          tags: ["packaging", "branding"],
          tools: ["Adobe Illustrator", "Adobe InDesign"],
          gallery: [
            "assets/project-images/project1/sundog-bottle.png",
            "assets/project-images/project1/Sundog-Ad.png",
          ]
      },
      { 
          name: "BearRabbit Taproom",
          image: "assets/project-images/project2/bearrabbit-paper.png",
          link: "project.html",
          awards: "",
          tags: ["logo design", "branding"],
          tools: ["Adobe Illustrator"],
          gallery: [
            
          ]
      },
      { 
        name: "Festival at Sandpoint Poster",
        image: "",
        link: "project.html",
        awards: "https://www.festivalatsandpoint.com/posters",
        tags: ["illustration", "poster design"],
        tools: ["Adobe Illustrator", "Adobe InDesign"],
        gallery: [
          
        ]
    },
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
  const desktopContainer = document.querySelector(".project-details");
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

