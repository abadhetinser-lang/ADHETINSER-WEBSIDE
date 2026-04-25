function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function showPage(pageId) {

  // Oculta todas las páginas
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  // Muestra la seleccionada
  document.getElementById(pageId).classList.add("active");

  // Cierra el menú
  document.getElementById("menu").classList.remove("active");

  // Scroll arriba
  window.scrollTo(0, 0);
}
