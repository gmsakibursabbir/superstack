const offcanvas = document.getElementById("offcanvasMenu");
const overlay = document.getElementById("offcanvasOverlay");

// === Offcanvas Functions ===
function openOffcanvas() {
  offcanvas.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
}

function closeOffcanvas() {
  offcanvas.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
}

// === Modal Functions ===
function openModal(id) {
  // 1️⃣ Close offcanvas if it's open
  closeOffcanvas();

  // 2️⃣ Close any already open modal
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  // 3️⃣ Open requested modal
  const modal = document.getElementById(id);
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function overlayClick(event, id) {
  if (event.target.id === id) {
    closeModal(id);
  }
}

// === Password Toggle (Reusable with Icons) ===
document.querySelectorAll(".toggle-password").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const input = toggle.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      toggle.innerHTML = '<i class="ri-eye-off-line"></i>';
    } else {
      input.type = "password";
      toggle.innerHTML = '<i class="ri-eye-line"></i>';
    }
  });
});

(function () {
  const btn = document.getElementById("chatDropdownBtn");
  const content = document.getElementById("chatDropdownContent");

  btn.addEventListener("click", () => {
    content.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !content.contains(e.target)) {
      content.classList.add("hidden");
    }
  });
})();

// Profile dropdown toggle
document.querySelectorAll(".profile-dropdown").forEach((dropdown) => {
  const btn = dropdown.querySelector(".profile-btn");
  const content = dropdown.querySelector(".profile-content");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    content.classList.toggle("hidden");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      content.classList.add("hidden");
    }
  });
});

const btn = document.getElementById("dropdownBtn");
const content = document.getElementById("dropdownContent");
const icon = document.getElementById("dropdownIcon");

btn.addEventListener("click", () => {
  content.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
});

// Optional: close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !content.contains(e.target)) {
    content.classList.add("hidden");
    icon.classList.remove("rotate-180");
  }
});
