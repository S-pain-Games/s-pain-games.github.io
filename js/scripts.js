/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    var dictionary = {
        'en':
        {
            'about': 'About',
            "projects": "Projects",
            "members": "Members",
            "indie": "Indie game development studio",
            "who": "Who are we",
            "we_are": "We are a group of university students who develop indie video games. We specialize in 2D resource management video games with a Pixel Art style. You can check out our projects in our Itch.io site.",
            "our_projects": "Our projects",
            "cookies_intro": "Create magical cookie minions and give them missions to complete in this narrative-driven, resource management and puzzles game.",
            "feature_1_title": "Talk at daytime, Bake at night-time",
            "feature_1_desc": "Manage your bakery and talk to the townsfolk at daytime. <br> Craft your cookie shaped minions at night and send them to help. <br> Unlock advanced cookie recipes to bake different types of cookie minions.",
            "feature_2_title": "Rebake the world",
            "feature_2_desc": "Tons of quests with multiple outcomes. <br> Improve the prosperity of the town, make everyone happy, or the opposite.",
            "game_page_button": "CHECK OUT THE BETA VERSION HERE",
            "our_teams": "Our team members",
            "programmer": "Programmer",
            "designer": "Game designer",
            "artist": "2D Artist"
          },
          'es':
          {
            "about": "Sobre nosotros",
            "projects": "Proyectos",
            "members": "Miembros",
            "indie": "Equipo de desarrollo de juegos indie",
            "who": "Quienes somos",
            "we_are": "Somos un grupo de estudiantes universitarios que desarrollan videojuegos indie. Nos especializamos en videojuegos 2D con estilo Pixel Art. Puedes ver nuestros proyectos en nuestra página de Itch.io.",
            "our_projects": "Nuestros proyectos",
            "cookies_intro": "Hornea ayudantes en forma de Galletas mágicas y otórgales misiones para completar en este juego de gestión y puzles con un fuerte componente narrativo.",
            "feature_1_title": "Habla con los vecinos por el día, Hornea por la noche",
            "feature_1_desc": "Gestiona tu pastelería y habla con los vecinos por el día. <br>Hornea tus ayudantes con forma de galleta por la noche y envíalos a ayudar.<br> Desbloquea recetas de galletas avanzadas para hornear diferentes tipos de galletas ayudantes.",
            "feature_2_title": "Cambia el mundo.",
            "feature_2_desc": "Multitud de misiones con múltiples resultados. <br> Restaura la prosperidad del pueblo, haz a todo el mundo feliz, o todo lo contrario.",
            "game_page_button": "ECHA UN VISTAZO A LA VERSIÓN 1.0 DEL JUEGO",
            "our_teams": "Nuestro equipo",
            "programmer": "Programador",
            "designer": "Diseñador",
            "artist": "Artista 2D"
          }
    }

  // Creating a translator instance
  var translator = new EOTranslator(dictionary);

  // Getting the DOM elements
  var globalTranslate = document.getElementById('globalTranslate');

  // Setting the default language
  globalTranslate.value = document.documentElement.lang || 'en';

  // Translating the greeting input when the greet button is clicked
  globalTranslate.addEventListener('change', function () {
    var language = globalTranslate.value;

    try {
      translator.translateDOM(document.body, language);
    } catch (e) {
      alert(e);
    }
  });

  // Invoking the change event
  globalTranslate.dispatchEvent(new Event('change'));


});


