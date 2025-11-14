// Obtenemos el botón "Subir Arriba"
//aqui llamamos al boton que creamos en el html
const btnSubirArriba = document.getElementById('btnSubirArriba');

// Mostrar / ocultar el botón según el scroll
//aqui hacemos que el boton aparezca o desaparezca dependiendo de la posicion del scroll
window.addEventListener('scroll', function () {
  
    // Altura total del documento menos el alto visible de la ventana
  const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;

  // Si hemos bajado más de la mitad del scroll total aparece el botón, magiaaaaaaaaaaaaa
  if (window.scrollY > scrollTotal / 2) {
    btnSubirArriba.classList.remove('d-none'); // Mostrar botón
  } else {
    btnSubirArriba.classList.add('d-none');    // Ocultar botón
  }
});

// Al hacer clic, subir suave hacia arriba 
btnSubirArriba.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
