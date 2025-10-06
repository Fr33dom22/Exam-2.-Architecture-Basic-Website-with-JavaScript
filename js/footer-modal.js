document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".map-overlay");
  const nameInput = overlay.querySelector('input[type="text"]');
  const emailInput = overlay.querySelector('input[type="email"]');
  const submitBtn = overlay.querySelector("button");

  submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
      alert("Please fill in both Name and Email.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Form submitted!\nName: ${name}\nEmail: ${email}`);

    nameInput.value = "";
    emailInput.value = "";
  });

  overlay.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitBtn.click();
    }
  });
});
