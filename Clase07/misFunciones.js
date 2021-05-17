window.addEventListener("scroll", function (){
    let altPantalla = window.innerHeight;
    console.log ("altPantalla" + altPantalla);

    let scrollRecorrido = this.document.documentElement.scrollTop;
    console.log('scroll recorrido' + scrollRecorrido);

    let listaDetalle = document.querySelectorAll('#secDetalles');


    listaDetalle.forEach (function (item, index, listado ){
        let alturaArticle = listado[index].offsetTop;
        console.log('posicion superior' +  index + '::' + alturaArticle);
        if ((alturaArticle*0.4) < scrollRecorrido ){
            listado[index].style.opacity = "1"; 
        }

    });
});