const projectButtons = document.querySelectorAll(".project__btn");

projectButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    projectButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    document.getElementById("header").scrollIntoView({
      behavior: "smooth",
    });
  });
});
