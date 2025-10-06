document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".gallery__modal");
  const modalImg = document.querySelector(".gallery__modal-img");
  const closeBtn = document.querySelector(".gallery__close");
  const seeMoreBtn = document.querySelector(".gallery__btn");
  const galleryRight = document.querySelector(".gallery__right");
  const prevBtn = document.querySelector(".gallery__modal-prev");
  const nextBtn = document.querySelector(".gallery__modal-next");

  let allImages = Array.from(document.querySelectorAll(".gallery__item img"));
  let currentIndex = 0;
  let addedMore = false;

  function updateArrows() {
    prevBtn.style.display = currentIndex === 0 ? "none" : "flex";
    nextBtn.style.display =
      currentIndex === allImages.length - 1 ? "none" : "flex";
  }

  function openModal(index) {
    currentIndex = index;
    modalImg.src = allImages[currentIndex].src;
    modal.style.display = "flex";
    updateArrows();
  }

  function showNext() {
    if (currentIndex < allImages.length - 1) {
      currentIndex++;
      modalImg.src = allImages[currentIndex].src;
      updateArrows();
    }
  }

  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      modalImg.src = allImages[currentIndex].src;
      updateArrows();
    }
  }

  allImages.forEach((img, index) => {
    img.addEventListener("click", () => openModal(index));
  });

  document
    .querySelectorAll(".gallery__item--big .gallery__zoom")
    .forEach((zoom, i) => {
      zoom.addEventListener("click", (e) => {
        e.stopPropagation();
        openModal(i);
      });
    });

  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") modal.style.display = "none";
    }
  });

  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  // SEE MORE / SEE LESS
  seeMoreBtn.addEventListener("click", () => {
    const newImages = [
      "images/gallery-6.jpg",
      "images/gallery-7.jpg",
      "images/gallery-8.jpg",
    ];

    if (!addedMore) {
      newImages.forEach((src) => {
        const div = document.createElement("div");
        div.classList.add("gallery__item");
        div.innerHTML = `<img src="${src}" alt="Building" />`;
        galleryRight.appendChild(div);

        const img = div.querySelector("img");
        allImages.push(img);
        img.addEventListener("click", () => openModal(allImages.indexOf(img)));
      });
      seeMoreBtn.textContent = "SEE LESS";
      addedMore = true;
    } else {
      for (let i = 0; i < newImages.length; i++) {
        const last = galleryRight.lastElementChild;
        const imgIndex = allImages.indexOf(last.querySelector("img"));
        if (imgIndex !== -1) allImages.splice(imgIndex, 1);
        galleryRight.removeChild(last);
      }
      seeMoreBtn.textContent = "SEE MORE";
      addedMore = false;
    }
  });
});
