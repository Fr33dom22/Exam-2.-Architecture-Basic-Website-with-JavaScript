"use strict";

const newsData = [
  {
    title: "SEE THE UNMATCHED BEAUTY OF THE GREAT.",
    text: "Free directories: directories are perfect for customers that are searching for…",
    author: "ALJA BRUN",
    date: "20 Jan 2020",
    image: "./images/news1.jpg",
    avatar: "./images/avatar1.jpg",
  },
  {
    title: "EFFECTIVE ADVERTISING POINTERS.",
    text: "Having a home based business is a wonderful asset to your life…",
    author: "DOMINIC FREEMAN",
    date: "13 Dec 2019",
    image: "./images/news2.jpg",
    avatar: "./images/avatar2.jpg",
  },
  {
    title: "HYPNOTIZE YOURSELF INTO THE GHOST.",
    text: "There are many things that are important to catalog design…",
    author: "ALICE WARD",
    date: "30 Nov 2019",
    image: "./images/news3.jpg",
    avatar: "./images/avatar3.jpg",
  },
  {
    title: "ARCHITECTURE & NATURE.",
    text: "Blending modern design with natural surroundings.",
    author: "VICTORIA LEE",
    date: "20 Aug 2020",
    image: "./images/news2.jpg",
    avatar: "./images/avatar3.jpg",
  },
  {
    title: "MODERN SPACES INSPIRED BY NATURE",
    text: "Explore unique architectural designs with eco-friendly materials.",
    author: "SAMUEL GREEN",
    date: "05 Mar 2021",
    image: "./images/news1.jpg",
    avatar: "./images/avatar1.jpg",
  },
  {
    title: "CREATIVE DESIGN TRENDS 2025",
    text: "Discover how innovation meets functionality in modern spaces.",
    author: "LUCY WHITE",
    date: "12 Apr 2021",
    image: "./images/news2.jpg",
    avatar: "./images/avatar2.jpg",
  },
];

const sliderWrapper = document.querySelector(".news__slider .swiper-wrapper");

function renderNews(data) {
  sliderWrapper.innerHTML = "";
  data.forEach((item) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
      <div class="news-card">
        <img src="${item.image}" alt="News image" class="news-image">
        <div class="news-content">
          <h3 class="news-title">${item.title}</h3>
          <p class="news-text">${item.text}</p>
          <div class="news-footer">
            <img src="${item.avatar}" alt="${item.author}" class="news-avatar">
            <div class="news-meta">
              <span class="news-author">${item.author}</span>
              <span class="news-date">${item.date}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    sliderWrapper.appendChild(slide);
  });
}

renderNews(newsData);

const swiper = new Swiper(".news__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopAdditionalSlides: 5,
  pagination: {
    el: ".news__dots",
    clickable: true,
  },
  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
