const allSections = ["header", "projects", "news", "gallery", "map-footer"];
const menuSections = ["header", "projects", "news", "map-footer"];
const sectionTitles = ["ABOUT US", "PROJECTS", "NEWS", "CONTACT"];

function createSidePagination() {
  const container = document.createElement("div");
  container.classList.add("page-pagination");

  allSections.forEach((id) => {
    const bullet = document.createElement("span");
    bullet.dataset.target = id;
    container.appendChild(bullet);
  });

  document.body.appendChild(container);
}

function createNavMenu() {
  const navList = document.querySelector(".nav__list");
  navList.innerHTML = "";

  sectionTitles.forEach((title, i) => {
    const li = document.createElement("li");
    li.classList.add("nav__item");

    li.innerHTML = `
      <span class="bullet" data-target="${menuSections[i]}"></span>
      <a href="#${menuSections[i]}" class="nav__link">${title}</a>
    `;

    navList.appendChild(li);
  });
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function initClicks() {
  document.querySelectorAll(".page-pagination span").forEach((bullet) => {
    bullet.addEventListener("click", () =>
      scrollToSection(bullet.dataset.target)
    );
  });

  document.querySelectorAll(".nav__item .bullet").forEach((bullet) => {
    bullet.addEventListener("click", () =>
      scrollToSection(bullet.dataset.target)
    );
  });

  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);
      scrollToSection(id);
    });
  });
}

function updateActive() {
  const scrollPos = window.scrollY + window.innerHeight / 2;

  allSections.forEach((id, index) => {
    const section = document.getElementById(id);
    if (!section) return;

    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    const bullets = document.querySelectorAll(".page-pagination span");
    const menuBullets = document.querySelectorAll(".nav__item .bullet");

    if (scrollPos >= top && scrollPos < bottom) {
      bullets.forEach((b) => b.classList.remove("active"));
      bullets[index].classList.add("active");

      menuBullets.forEach((b) => b.classList.remove("active"));
      if (index <= 3) menuBullets[index].classList.add("active");
    }
  });
}



window.addEventListener("load", () => {
  createSidePagination();
  createNavMenu();
  initClicks();
  updateActive();
});

window.addEventListener("scroll", updateActive);
