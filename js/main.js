let swLocation = "sw.js";

if (navigator.serviceWorker) {
  if (window.location.href.includes("localhost")) swLocation = "/sw.js";
  navigator.serviceWorker.register(swLocation);
}

const mobile = () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
};

const pantalla = document.querySelector("#pantalla");
const del = document.querySelector(".delete");
const delA = document.querySelector(".deleteAll");

const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (number.includes(e.key)) {
    pintarNumero(e.key);
  }
  if (e.key === "Backspace") {
    deleteNumber();
  }
  if (e.key === "Enter") {
    openWhatsApp();
  }
});

const activeButtom = () => {
  if (pantalla.textContent === "") {
    del.classList.remove("active");
    delA.classList.remove("active");
  } else {
    del.classList.add("active");
    delA.classList.add("active");
  }
};

const pintarNumero = (n) => {
  pantalla.textContent += n;
  activeButtom();
};

const deleteNumber = () => {
  pantalla.textContent = pantalla.textContent.substring(0, pantalla.textContent.length - 1);
  activeButtom();
};

const deleteAll = () => {
  pantalla.textContent = "";
  activeButtom();
};

const openWhatsApp = () => {
  if (mobile()) {
    window.open(`https://wa.me/+${country.value}${pantalla.textContent}`);
  } else {
    window.open(
      `https://web.whatsapp.com/send/?phone=%2B${country.value}${pantalla.textContent}&text&type=phone_number&app_absent=0`
    );
  }
};
