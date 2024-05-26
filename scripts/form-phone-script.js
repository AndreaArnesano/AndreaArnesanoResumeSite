enableDarkMode = () => {
  document.querySelector(".style-link-form").href = "style/form-phone-dark.css";
  document.querySelector(".go-back-image").src = "images/home-dark.png";
};

enableLightMode = () => {
  document.querySelector(".style-link-form").href =
    "style/form-phone-light.css";
  document.querySelector(".go-back-image").src = "images/home.png";
};

if (localStorage.getItem("dark-mode") === "enabled") {
  enableDarkMode();
} else {
  enableLightMode();
}

if (localStorage.getItem("language") === "italian") {
  document.querySelector(".title").innerHTML = "Contattami!";
  document.querySelector(".email-input").placeholder = "La tua email";
  document.querySelector(".message-input").placeholder = "Il tuo messaggio";
  document.querySelector(".submit-button").value = "Invia";
} else {
  document.querySelector(".title").innerHTML = "Contact me!";
  document.querySelector(".email-input").placeholder = "Your email";
  document.querySelector(".message-input").placeholder = "Your message";
  document.querySelector(".submit-button").value = "Send";
}

document.querySelector(".go-back-button").addEventListener("click", () => {
  window.location.href = "index.html";
});
