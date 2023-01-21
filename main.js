const pantalla = document.querySelector("#pantalla");
const del = document.querySelector(".delete");

const pintarNumero = (n) => {
  pantalla.textContent += n;
  del.classList.add("active");
};

const deleteNumber = () => {
  pantalla.textContent = pantalla.textContent.substring(0, pantalla.textContent.length - 1);
  if (pantalla.textContent === "") {
    del.classList.remove("active");
  }
};

const openWhatsApp = () => {
  window.open("https://wa.me/+" + country.value + pantalla.textContent);
};
