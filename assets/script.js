document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = year);

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    nav.addEventListener("click", event => {
      if (event.target.matches("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      }
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  const form = document.querySelector("#contact-form");
  if (!form) return;

  const fields = [
    { id: "name", message: "Please enter your name." },
    { id: "email", message: "Please enter a valid email address." },
    { id: "message", message: "Please enter a message." }
  ];

  const setError = (input, message) => {
    const error = document.querySelector(`#${input.id}-error`);
    input.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message;
  };

  const validate = () => {
    let valid = true;
    fields.forEach(({id, message}) => {
      const input = document.querySelector(`#${id}`);
      let error = "";
      if (!input.value.trim()) error = message;
      else if (id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) error = message;
      setError(input, error);
      if (error) valid = false;
    });
    return valid;
  };

  form.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    if (!validate()) {
      status.textContent = "Please correct the highlighted fields.";
      const firstInvalid = form.querySelector("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }
    status.textContent = "Thanks! This demo form is validated locally. Connect it to your email service or backend to send messages.";
    form.reset();
    fields.forEach(({id}) => setError(document.querySelector(`#${id}`), ""));
  });

  fields.forEach(({id}) => {
    const input = document.querySelector(`#${id}`);
    input.addEventListener("blur", validate);
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") validate();
    });
  });
});
