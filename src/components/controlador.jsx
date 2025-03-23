import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Asegúrate de incluir Bootstrap


    // Código para manejar 'offcanvas' con Bootstrap
    try {
      const offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'));
      const offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
        return new bootstrap.Offcanvas(offcanvasEl);
      });
    } catch (error) {
      console.error("Error initializing offcanvas:", error);
    }

    // Manejo de las opciones de clic
    const opciones = document.querySelectorAll('.opciones');
    opciones.forEach(opcion => {
      opcion.addEventListener('click', function() {
        opciones.forEach(o => o.classList.remove('select-opt'));
        this.classList.add('select-opt');
      });
    });

    // Manejo del mouseover y mouseout
    const redes = document.querySelectorAll('.redes');
    redes.forEach(red => {
      red.addEventListener('mouseover', () => {
        red.classList.add('resaltado');
      });
      red.addEventListener('mouseout', () => {
        red.classList.remove('resaltado');
      });
    });

    // Cerrar el 'offcanvas' cuando se haga clic en un elemento de navegación
    /*try {
      const offcanvas = document.getElementById('navbarNav');
      if (offcanvas) {
        const elementosNavegacion = offcanvas.querySelectorAll('.nav-item');
        elementosNavegacion.forEach(elemento => {
          elemento.addEventListener('click', function() {
            const offcanvasBootstrap = bootstrap.Offcanvas.getInstance(offcanvas);
            if (offcanvasBootstrap) {
              offcanvasBootstrap.hide();
            }
          });
        });
      }
    } catch (error) {
      console.error("Error with navbarNav elements:", error);
    }

export default Controlador;*/