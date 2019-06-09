$(document).ready(function(){
    //Slider, configurar plugin
    if(window.location.href.indexOf('index')>-1){    //Solamente si estamos en la página index.html (existe la palabra index en la URL)
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: false,
            auto: true,
            speed: 1000
        });
    }

    //Posts o artículos de ejemplo (array de objetos JSON)
    if(window.location.href.indexOf('index')>-1){    //Solamente si estamos en la página index.html (existe la palabra index en la URL)
        var posts = [
            {
                title: 'Prueba de título 1',
                date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Vestibulum sed libero sed nisi fermentum dapibus. In tortor erat, consequat in lorem ut, ullamcorper malesuada tortor. Aenean non augue aliquam turpis egestas maximus quis non lacus. Suspendisse facilisis, mi et tempor vestibulum, felis lacus molestie tellus, eu tempor mi ipsum a libero. Nullam id euismod urna, non euismod mi. Quisque at ex ac dolor commodo blandit. Ut porttitor, eros in dapibus egestas, ante est hendrerit ligula, tempor finibus nunc ante nec nisl. Nulla at ante sit amet ligula aliquet aliquet. Fusce et erat facilisis, fringilla tortor et, finibus odio. Nullam sagittis euismod justo, ac tempus diam mollis vel. Nam sem erat, sollicitudin id viverra porta, imperdiet tincidunt mi. Mauris efficitur nisl nulla, sit amet condimentum augue placerat laoreet.'
            },
            {
                title: 'Prueba de título 2',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Vestibulum sed libero sed nisi fermentum dapibus. In tortor erat, consequat in lorem ut, ullamcorper malesuada tortor. Aenean non augue aliquam turpis egestas maximus quis non lacus. Suspendisse facilisis, mi et tempor vestibulum, felis lacus molestie tellus, eu tempor mi ipsum a libero. Nullam id euismod urna, non euismod mi. Quisque at ex ac dolor commodo blandit. Ut porttitor, eros in dapibus egestas, ante est hendrerit ligula, tempor finibus nunc ante nec nisl. Nulla at ante sit amet ligula aliquet aliquet. Fusce et erat facilisis, fringilla tortor et, finibus odio. Nullam sagittis euismod justo, ac tempus diam mollis vel. Nam sem erat, sollicitudin id viverra porta, imperdiet tincidunt mi. Mauris efficitur nisl nulla, sit amet condimentum augue placerat laoreet.'
            },
            {
                title: 'Prueba de título 3',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Vestibulum sed libero sed nisi fermentum dapibus. In tortor erat, consequat in lorem ut, ullamcorper malesuada tortor. Aenean non augue aliquam turpis egestas maximus quis non lacus. Suspendisse facilisis, mi et tempor vestibulum, felis lacus molestie tellus, eu tempor mi ipsum a libero. Nullam id euismod urna, non euismod mi. Quisque at ex ac dolor commodo blandit. Ut porttitor, eros in dapibus egestas, ante est hendrerit ligula, tempor finibus nunc ante nec nisl. Nulla at ante sit amet ligula aliquet aliquet. Fusce et erat facilisis, fringilla tortor et, finibus odio. Nullam sagittis euismod justo, ac tempus diam mollis vel. Nam sem erat, sollicitudin id viverra porta, imperdiet tincidunt mi. Mauris efficitur nisl nulla, sit amet condimentum augue placerat laoreet.'
            },
            {
                title: 'Prueba de título 4',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Vestibulum sed libero sed nisi fermentum dapibus. In tortor erat, consequat in lorem ut, ullamcorper malesuada tortor. Aenean non augue aliquam turpis egestas maximus quis non lacus. Suspendisse facilisis, mi et tempor vestibulum, felis lacus molestie tellus, eu tempor mi ipsum a libero. Nullam id euismod urna, non euismod mi. Quisque at ex ac dolor commodo blandit. Ut porttitor, eros in dapibus egestas, ante est hendrerit ligula, tempor finibus nunc ante nec nisl. Nulla at ante sit amet ligula aliquet aliquet. Fusce et erat facilisis, fringilla tortor et, finibus odio. Nullam sagittis euismod justo, ac tempus diam mollis vel. Nam sem erat, sollicitudin id viverra porta, imperdiet tincidunt mi. Mauris efficitur nisl nulla, sit amet condimentum augue placerat laoreet.'
            }
        ]
    
        //Insertar la info de los posts de ejemplo en el HTML de la página, mediante una plantilla HTML y JavaScript 
        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>    
            `;
            $("#posts").append(post);
        });
    }
    
    //Botones de selección de tema
    var theme = $("#tema-seleccionado");            //Variable que almacena la referencia al fichero de estilos en index.html
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");        //Al hacer click en el selector, cambiamos la referencia del fichero CSS en el atributo href. 
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");        
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");        
    });

    //Scroll arriba desde el final de la página
    $(".subir").click(function(e){
        e.preventDefault();                     //Evitar que el link nos redirija a alguna otra página
        
        $('html, body').animate({               //Animación sobre los elementos html y body de la página
            scrollTop: 0                        //Realizar un scroll al punto de arriba
        }, 600);                                //Tiempo de la animación
    });

    //Login simulado: Guardar nombre de usuario en LocalStorage al pulsar el botón enviar
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    //Login simulado: Extraer del LocalStorage la información de usuario validado previamente
    var form_name = localStorage.getItem("form_name");
    if(form_name!=null && form_name!="undefined"){
        var about_parrafo = $("#about p");
        $("#about p").html("<br><strong>Bienvenido, "+ form_name + "</strong> ");
        $("#about p").append("<a href='#' id='logout'>Cerrar sesión</a>");
        $("#login").hide();

        $("#logout").click(function(){    //Si pulsamos en Cerrar Sesión, se elimina la variable de sesión del LocalStorge
            localStorage.clear();
            location.reload();            //Permite volver a cargar la página, para que tras limpiar la variable de sesión en LocalStorage, se muestre nuevamente el formulario.
        });
    }
    
    //Acordeón de la página about
    if(window.location.href.indexOf('about')>-1){    //Solamente si estamos en la página about.html (existe la palabra about en la URL)
        $("#acordeon").accordion();
    }

    //Reloj de la página reloj. Configurar un timer para que actualice la hora cada segundo.
    if(window.location.href.indexOf('reloj')>-1){    //Solamente si estamos en la página reloj.html (existe la palabra about en la URL)
        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
        },1000);
    }

    //Formulario contacto.
    if(window.location.href.indexOf('contact')>-1){    //Solamente si estamos en la página contact.html (existe la palabra contact en la URL)
        // Realizar validación de los campos mediante el plugin jQuery Validator
        $.validate({
            lang: 'es',
        });

        //Formulario contacto: Asignar un datapicker al campo fecha
        $("form input[name='date']").datepicker({      //Todos campos de formulario cuyo nombre sea 'date' va a tener un datepicker (en este caso solo será un solo campo)
            dateFormat: 'dd-mm-yy'
        });  
    }
});