const aiLanguageUrls = {
  en: "/ai-powered-patient-acquisition.html",
  tr: "/tr/ai-powered-patient-acquisition.html",
  fr: "/fr/ai-powered-patient-acquisition.html",
  ar: "/ar/ai-powered-patient-acquisition.html",
  ru: "/ru/ai-powered-patient-acquisition.html",
  zh: "/zh/ai-powered-patient-acquisition.html",
  es: "/es/ai-powered-patient-acquisition.html"
};

document.addEventListener("DOMContentLoaded", () => {
  const language = document.documentElement.lang || "en";
  document.querySelectorAll("[data-ai-language], [data-language]").forEach(select => {
    select.value = language;
    select.addEventListener("change", event => {
      window.location.href = aiLanguageUrls[event.target.value] || aiLanguageUrls.en;
    });
  });
  const menuButton = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");
  menuButton?.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll("[data-year]").forEach(element => { element.textContent = new Date().getFullYear(); });
});
