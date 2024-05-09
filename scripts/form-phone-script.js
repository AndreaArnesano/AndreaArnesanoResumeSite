enableDarkMode = () => {
  document.querySelector(".style-link-form").href = "style/form-phone-dark.css";
};

enableLightMode = () => {
  document.querySelector(".style-link-form").href =
    "style/form-phone-light.css";
};

if (localStorage.getItem("dark-mode") === "enabled") {
  enableDarkMode();
} else {
  enableLightMode();
}
