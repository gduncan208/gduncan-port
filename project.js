

document.addEventListener("DOMContentLoaded", () => {
  const storedProject = localStorage.getItem("currentProject");
  const currentProject = storedProject && storedProject !== "undefined" ? JSON.parse(storedProject) : null;

  if (currentProject) {
      const projectHeading = document.getElementById("project-heading");
      const tagsContainer = document.querySelector(".tags");
      const toolsContainer = document.querySelector(".tools");
      const awardsContainer = document.querySelector(".awards");
      const awardHeading = document.querySelector(".award-heading");
      const briefContainer = document.querySelector(".brief");
      const projectGallery = document.getElementById("projectDisplay");

      if (projectHeading) projectHeading.innerHTML = currentProject.name;

      if (awardsContainer) {
        const awards = currentProject.awards;
      
        awardsContainer.innerHTML = ""; 
      
        if (Array.isArray(awards) && awards.length > 0) {
          awards.forEach(award => {
            const contestLink = document.createElement("a");
            contestLink.className = "contest";
            contestLink.href = award.url || "#";
            contestLink.textContent = award.name || award.contest || "Contest";
            contestLink.target = "_blank";
            contestLink.rel = "noopener noreferrer";
      
            const awardSpan = document.createElement("span");
            awardSpan.className = "award";
            awardSpan.textContent = award.award;
      
            awardsContainer.appendChild(contestLink);
            awardsContainer.appendChild(awardSpan);
          });
      
          awardsContainer.style.display = "flex";
        } else {
          awardsContainer.style.display = "none";
          awardHeading.style.display = "none";
        }
      }

      if (briefContainer) {
        briefContainer.innerHTML = "";

        const projectBrief = document.createElement("p");
        projectBrief.className = "brief-desc";
        projectBrief.textContent = currentProject.brief;
        briefContainer.appendChild(projectBrief);
      }

      const clientContainer = document.querySelector(".client-name");
        if (clientContainer) {
        clientContainer.innerHTML = currentProject.client || "N/A";
        }
      
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
            

            projectGalleryImg.addEventListener("click", () => {
              openLightbox(gImg);
            })

            projectGallery.appendChild(projectGalleryImg);
        });

          const lightbox = document.getElementById("theLightbox");
          const lightboxImg = document.querySelector(".lightboxImg");
          const closeLightboxBtn = document.querySelector(".closeLightboxBtn");

          function openLightbox(gImg) {
            lightboxImg.onload = () => {
              const viewportHeight = window.innerHeight;
              if (lightboxImg.naturalHeight > viewportHeight) {
                lightboxImg.style.height = "90vh";
                lightboxImg.style.width = "auto";
                lightboxImg.style.objectFit = "contain";
              } else {
                lightboxImg.style.height = "";
                lightboxImg.style.width = "";
                lightboxImg.style.objectFit = "";
              }
            };
          
            lightboxImg.src = gImg;
            lightbox.style.display = "flex";
          }
          

            closeLightboxBtn.addEventListener("click", () => {

              function closeLightbox() {
                lightbox.style.display = "none";
              };

              closeLightbox();
            });
    }
  }

  // Project Data
  const projects = [
    { 
      id: "bearrabbit",
        name: "BearRabbit Taproom",
        brief: "Create a logo for a hangout such as a pub or taproom with the name BearRabbit",
        client: "Class Project",
        image: "assets/project-images/bearrabbit/bearrabbit-paper.jpg",
        link: "project.html",
        awards: [
          {
            contest: "Spokane American Advertisting Federation - Elements of Advertisting: Logo Design",
            award: "Best of Show",
            url: ""
          },
          {
            name: "Spokane American Advertisting Federation - Elements of Advertisting: Logo Design",
            award: "Gold American Advertisting Award",
            url: ""
          }
        ],
        tags: ["logo design", "branding"],
        tools: ["Adobe Illustrator"],
        gallery: [
          "assets/project-images/bearrabbit/bearrabbit-paper.jpg",
          "assets/project-images/bearrabbit/beergradient.jpg",
          "assets/project-images/bearrabbit/coaster.png",
        ]
      },
      { 
        id: "breathe-matches",
        name: "Breathe Matchbox",
        brief: "Create a package design of your choice",
        client: "Class Project",
        image: "assets/project-images/breathematchbox/matchbox.jpg",
        link: "project.html",
        awards: [
          {
            contest: "Spokane American Advertisting Federation - Sales and Marketing Packaging",
            award: "Silver American Advertisting Award",
            url: ""
          }
        ],
        tags: ["packaging", "illustration"],
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        gallery: [
          "assets/project-images/breathematchbox/package.png",
          "assets/project-images/breathematchbox/matchbox.jpg",
          "assets/project-images/breathematchbox/matchesad.jpg",
          "assets/project-images/breathematchbox/drawing.jpg",
        ]
      },
      { 
        id: "sandpoint-poster",
        name: "Festival at Sandpoint Poster",
        brief: "Create a poster the encompasses the themes of the Northwest, Sandpoint or music for the Festival at Sandpoint annual event",
        client: "Festival at Sandpoint",
        image: "assets/project-images/festivalsandpoint/sandpointposter.png",
        link: "project.html",
        awards: [
            {
              contest: "Festival at Sandpoint Annual Poster Contest",
              award: "First Place Winner",
              url: "https://www.festivalatsandpoint.com/posters"
            }
          ],
        tags: ["illustration", "poster design"],
        tools: ["Adobe Illustrator"],
        gallery: [
            "assets/project-images/festivalsandpoint/sandpointdesign20x30.jpg",
            "assets/project-images/festivalsandpoint/sandpointposter.png"
        ]
    },
    { 
        id: "pia-poster",
        name: "PIA Poster",
        brief: "Create a poster with the prompts 'print is essential' or 'print is persuasive",
        client: "Printing Industries Association, Inc.",
        image: "assets/project-images/pia/piaposter.jpg",
        link: "project.html",
        awards: [
            {
              contest: "Printing Industries Association, Inc. - Print Excellence Awards",
              award: "Second Place Winner",
              url: "https://www.piasc.org/printexcellence/"
            }
          ],
        tags: ["poster design"],
        tools: ["Adobe Photoshop"],
        gallery: [
          "assets/project-images/pia/piaposter.jpg",
        ]
    },
    { 
        id: "sundog-kombucha",
        name: "Sundog Hard Kombucha",
        brief: "Create a label design of your choice",
        client: "Class Project",
        image: "assets/project-images/sundog/sundog-bottle.png",
        link: "project.html",
        awards: [],
        tags: ["packaging", "branding"],
        tools: ["Adobe Illustrator", "Adobe InDesign"],
        gallery: [
          "assets/project-images/sundog/sundog-bottle.png",
          "assets/project-images/sundog/Sundog-Ad.png",
        ]
    },
  ];

  const projectsContainer = document.getElementById("projectGrid");


  if (projectsContainer) {
    const searchParams = new URLSearchParams(document.location.search);
    const projectId = searchParams.get("projectId");


    if (projectId) {
      const project = projects.find((p) => p.id === projectId);
      localStorage.setItem("currentProject", JSON.stringify(project));
      window.location.href = "/project.html";
    }



      projects.forEach(project => {
          const projectCard = document.createElement("a");
          projectCard.classList.add("project-card", "fade");
          projectCard.href = project.link;

          projectCard.addEventListener("click", () => {
              localStorage.setItem("currentProject", JSON.stringify(project));
          });

          const awardTitles = Array.isArray(project.awards) && project.awards.length > 0
          ? `<div class="card-hover-award">${project.awards[0].award}</div>`
          : "";

          projectCard.innerHTML = `
            <div>
                <img src="${project.image}" alt="${project.name}">
                <div class="card-hover-tags">
                     ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
                </div>
            </div>
            <div class="project-titles">
                <h3>${project.name}</h3> 
                <div class="card-award"> 
                ${awardTitles}
                </div>   
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
      if (window.innerWidth < 1200) {
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
const projectScroll = document.getElementById("projectDisplay");

if (dropdownBtn) {
    dropdownBtn.addEventListener("click", () => {
        const isActive = proDetails.classList.toggle("activated");
        dropdownBtn.classList.toggle("activated");

        if (isActive) {
            projectScroll.style.opacity = "0";
            projectScroll.style.pointerEvents = "none";
        } else {
            projectScroll.style.opacity = "1";
            projectScroll.style.pointerEvents = "auto";
        }
    });
}
});

