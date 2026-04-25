// ABRIR / CERRAR MENU
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// CAMBIAR DE SECCIÓN
function showPage(pageId) {

  // Oculta todas las páginas
  document.querySelectorAll(".page").forEach(section => {
    section.classList.remove("active");
  });

  // Muestra la sección seleccionada
  const selected = document.getElementById(pageId);
  if (selected) {
    selected.classList.add("active");
  }

  // Cierra el menú al seleccionar
  document.getElementById("menu").classList.remove("active");

  // Subir al inicio
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
