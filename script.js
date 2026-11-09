const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Менюну ачуу" : "Менюну жабуу");
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Менюну ачуу");
      mainNav.classList.remove("is-open");
    }
  });
}

const hoursInput = document.querySelector("#hours");
const hoursValue = document.querySelector("#hours-value");
const energyForm = document.querySelector("#energy-form");
const result = document.querySelector("#calc-result");

if (hoursInput && hoursValue && energyForm && result) {
  hoursInput.addEventListener("input", () => {
    hoursValue.textContent = `${hoursInput.value} саат`;
  });

  energyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!energyForm.reportValidity()) return;

    const watts = Number(energyForm.elements.watts.value);
    const hours = Number(hoursInput.value);
    const days = Number(energyForm.elements.days.value);
    const kilowattHours = (watts * hours * days) / 1000;
    const formatted = new Intl.NumberFormat("ky-KG", {
      maximumFractionDigits: 2,
    }).format(kilowattHours);

    result.innerHTML = `Жыйынтык: <strong>${formatted} кВт·саат</strong>`;
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
