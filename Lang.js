const translations = {
  en: {
    welcome: "Welcome to Luxury Hotel",
    rooms: "Our Rooms",
    contact: "Contact Us",
    book: "Book Now"
  },
  tr: {
    welcome: "Luxury Otele Hoş Geldiniz",
    rooms: "Odalarımız",
    contact: "Bize Ulaşın",
    book: "Rezervasyon Yap"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}

window.onload = () => {
  setLanguage(localStorage.getItem("lang") || "en");
};
