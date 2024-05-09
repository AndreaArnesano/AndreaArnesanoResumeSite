window.onscroll = function () {
  headerScroll();
};

function headerScroll() {
  const header = document.querySelector(".header");
  const sticky = header.offsetTop;
  const introduction = document.querySelector(".introduction");

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    introduction.style.marginTop = "150px";
  } else {
    header.classList.remove("sticky");
    introduction.style.marginTop = "0px";
  }
}

//button click to scroll
document.querySelector(".home-button").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//button click to scroll
document.querySelector(".skill-button").addEventListener("click", () => {
  window.scrollTo({ top: 480, behavior: "smooth" });
});

//button click to scroll
document.querySelector(".project-button").addEventListener("click", () => {
  window.scrollTo({ top: 1160, behavior: "smooth" });
});

//button click to scroll
document.querySelector(".contact-button").addEventListener("click", () => {
  window.scrollTo({ top: 2000, behavior: "smooth" });
});

//button click to open resume page
/*
document.querySelector(".resume-button").addEventListener("click", () => {
  window.open("files/Resume-Arnesano-Andrea.pdf");
});
*/

//button click to open github
document.querySelector(".github-logo").addEventListener("click", () => {
  window.open("https://github.com/AndreaArnesano");
});

//button click to open instagram
document.querySelector(".instagram-logo").addEventListener("click", () => {
  window.open("https://www.instagram.com/riaku_/");
});

//button click to open pinterest
document.querySelector(".pinterest-logo").addEventListener("click", () => {
  window.open("https://www.pinterest.it/andrearnesano/");
});

//hamburger button
document.querySelector(".hamburger-button").addEventListener("click", () => {
  if (document.querySelector(".hamburger-menu").classList.contains("hidden")) {
    document.querySelector(".hamburger-image").style.transform =
      "rotate(90deg)";
    document.querySelector(".hamburger-menu").classList.remove("hidden");
    document.querySelector(".hamburger-menu").classList.add("visible");
  } else if (
    document.querySelector(".hamburger-menu").classList.contains("visible")
  ) {
    document.querySelector(".hamburger-image").style.transform = "rotate(0deg)";
    document.querySelector(".hamburger-menu").classList.remove("visible");
    document.querySelector(".hamburger-menu").classList.add("hidden");
  }
});

//toggle dark mode and light mode
const enableDarkMode = () => {
  document.querySelector(".style-link").href = "style/home-page-style-dark.css";
  document.querySelector(".switch-theme-image").src =
    "images/lightbulb-off.png";
  document.querySelector(".hamburger-image").src = "images/hamburger-dark.png";
  document.querySelector(".slide-up-image").src = "images/slide-up-dark.png";
  localStorage.setItem("dark-mode", "enabled");
};

const enableLightMode = () => {
  document.querySelector(".style-link").href =
    "style/home-page-style-light.css";
  document.querySelector(".switch-theme-image").src = "images/lightbulb-on.png";
  document.querySelector(".hamburger-image").src = "images/hamburger.png";
  document.querySelector(".slide-up-image").src = "images/slide-up.png";
  localStorage.setItem("dark-mode", "disabled");
};

if (localStorage.getItem("dark-mode") === "enabled") {
  enableDarkMode();
}

document.querySelector(".switch-theme-button").addEventListener("click", () => {
  if (localStorage.getItem("dark-mode") === "enabled") {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

//toggle italian and english
const enableItalian = () => {
  localStorage.setItem("language", "italian");
  document.querySelector(".switch-language-image").src =
    "images/italian-flag.png";
  document.querySelector(".introduction-title-h2").innerHTML = "Salve! Sono";
  document.querySelector(".skill-button").innerHTML = "Abilità";
  document.querySelector(".project-button").innerHTML = "Progetti";
  document.querySelector(".contact-button").innerHTML = "Contatti";
  document.querySelector(".resume-button").innerHTML = "Curriculum";
  document.querySelector(".skills-title").innerHTML = "ABILITÀ";
  document.querySelector(".skills-box-1-h2").innerHTML = "Abilità";
  document.querySelector(".skills-box-1-li-1").innerHTML = "Ricerca";
  document.querySelector(".skills-box-1-li-2").innerHTML = "Collaborazione";
  document.querySelector(".skills-box-1-li-3").innerHTML = "Autodidattica";
  document.querySelector(".skills-box-1-li-4").innerHTML = "Pianificazione";
  document.querySelector(".skills-box-1-li-5").innerHTML = "Sviluppo";
  document.querySelector(".skills-box-1-li-6").innerHTML = "Progettazione";
  document.querySelector(".skills-box-1-li-7").innerHTML = "Comunicazione";
  document.querySelector(".skills-box-1-li-8").innerHTML =
    "Volontà ad imparare";
  document.querySelector(".skills-box-3-h2").innerHTML = "Linguaggi";
  document.querySelector(".projects-title").innerHTML = "PROGETTI";
  document.querySelector(".email-input").placeholder = "La tua email";
  document.querySelector(".message-input").placeholder = "Il tuo messaggio";
  document.querySelector(".submit-button").value = "Invia";
};

const enableEnglish = () => {
  localStorage.setItem("language", "english");
  document.querySelector(".switch-language-image").src =
    "images/english-flag.png";
  document.querySelector(".introduction-title-h2").innerHTML = "Hi! I am";
  document.querySelector(".skill-button").innerHTML = "Skills";
  document.querySelector(".project-button").innerHTML = "Projects";
  document.querySelector(".contact-button").innerHTML = "Contacts";
  document.querySelector(".resume-button").innerHTML = "Resume";
  document.querySelector(".skills-title").innerHTML = "SKILLS";
  document.querySelector(".skills-box-1-h2").innerHTML = "Skills";
  document.querySelector(".skills-box-1-li-1").innerHTML = "Research";
  document.querySelector(".skills-box-1-li-2").innerHTML = "Collaboration";
  document.querySelector(".skills-box-1-li-3").innerHTML = "Self-learning";
  document.querySelector(".skills-box-1-li-4").innerHTML = "Planning";
  document.querySelector(".skills-box-1-li-5").innerHTML = "Development";
  document.querySelector(".skills-box-1-li-6").innerHTML = "Design";
  document.querySelector(".skills-box-1-li-7").innerHTML = "Communication";
  document.querySelector(".skills-box-1-li-8").innerHTML = "Volunteer to learn";
  document.querySelector(".skills-box-3-h2").innerHTML = "Languages";
  document.querySelector(".projects-title").innerHTML = "PROJECTS";
  document.querySelector(".email-input").placeholder = "Your email";
  document.querySelector(".message-input").placeholder = "Your message";
  document.querySelector(".submit-button").value = "Send";
};

if (localStorage.getItem("language") === "italian") {
  enableItalian();
}

if (localStorage.getItem("language") === "english") {
  enableEnglish();
}

document
  .querySelector(".switch-language-button")
  .addEventListener("click", () => {
    if (localStorage.getItem("language") === "italian") {
      enableEnglish();
    } else {
      enableItalian();
    }
  });

//button click to open form

document
  .querySelector(".contact-me-direct-button")
  .addEventListener("click", () => {
    if (document.querySelector(".contact-me-direct").style.display === "none") {
      document.querySelector(".contact-me-direct").style.display = "flex";
    } else {
      document.querySelector(".contact-me-direct").style.display = "none";
    }
  });

document
  .querySelector(".contact-me-direct-button")
  .addEventListener("click", () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      document.querySelector(".contact-me-direct").style.display = "none";
      window.location.href = "form-phone.html";
    }
  });
