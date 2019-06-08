$(document).ready(function(){
    //Slider, configurar plugin
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: false,
        auto: true,
        speed: 1000
    });

    //Posts o artículos de ejemplo (array de objetos JSON)
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
});