
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: '/data/Developer_1.json',
  });

    var animacion = bodymovin.loadAnimation({
      container: document.getElementById('animation3'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/data/Lenguajes_2.json',
    });
  
  var animacion = bodymovin.loadAnimation({
    container: document.getElementById('animation4'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/data/Games_3.json'
  });

  var animacion = bodymovin.loadAnimation({
    container: document.getElementById('animation5'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/data/Project_4.json'
  });

  var animacion = bodymovin.loadAnimation({
    container: document.getElementById('animation6'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/data/paginas_5.json'
  });


  import Typed from 'typed.js';

  const typed = new Typed('#typed-text', {
	strings: [
        "Hola, soy Joseph Ordoñez.<br> Soy estudiante de Ingeniería en Sistemas.<br> Bienvenido a mi Portafolio personal."
    ],
    typeSpeed: 50,  // Velocidad de escritura
    backSpeed: 25,  // Velocidad de borrado
    startDelay: 500, // Retraso antes de empezar
    backDelay: 2000, // Tiempo antes de borrar el texto
    loop: true, // Hace que se repita infinitamente
    showCursor: true, // Muestra el cursor de escritura
});


/// Define constants globally 
window.HOME = 1; 
window.LENGUAJES = 2; 
window.JUEGOS = 3; 
window.PROJECTS = 4; 
window.PROGRAMAS = 5;  

// Define the navigation function 
window.cambiarVentana = function(opcion) {
  console.log('Cambiando a opción: ' + opcion);
  
  // Reset all nav buttons
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('select-opt');
  });
  
  // Add selected class to the clicked button
  switch (opcion) {
    case window.HOME:
      document.getElementById('home').classList.add('select-opt');
      break;
    case window.LENGUAJES:
      document.getElementById('lenguajes').classList.add('select-opt');
      break;
    case window.JUEGOS:
      document.getElementById('juegos').classList.add('select-opt');
      break;
    case window.APLICACIONES:
      document.getElementById('projects').classList.add('select-opt');
      break;
    case window.PROGRAMAS:
      document.getElementById('programas').classList.add('select-opt');
      break;
  }
  
  // Hide all content sections
  document.getElementById('contenido-1').style.display = "none";
  document.getElementById('contenido-2').style.display = "none";
  document.getElementById('contenido-3').style.display = "none";
  document.getElementById('contenido-4').style.display = "none";
  document.getElementById('contenido-5').style.display = "none";
  
  // Show the selected content section
  switch (opcion) {
    case window.HOME:
      document.getElementById('contenido-1').style.display = "block";
      break;
    case window.LENGUAJES:
      document.getElementById('contenido-2').style.display = "block";
      break;
    case window.JUEGOS:
      document.getElementById('contenido-3').style.display = "block";
      break;
    case window.PROJECTS:
      document.getElementById('contenido-4').style.display = "block";
      break;
    case window.PROGRAMAS:
      document.getElementById('contenido-5').style.display = "block";
      break;
  }
};

// Initialize everything once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Show home content by default
  window.cambiarVentana(window.HOME);
  
  // Manejo del mouseover y mouseout para íconos de redes sociales
  const redes = document.querySelectorAll('.redes');
  redes.forEach(red => {
    red.addEventListener('mouseover', () => {
      red.classList.add('resaltado');
    });
    red.addEventListener('mouseout', () => {
      red.classList.remove('resaltado');
    });
  });
});