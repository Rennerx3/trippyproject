'use strict'


const grande    = document.querySelector('.grande');
const punto     = document.querySelectorAll('.punto');


// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{
       
        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50
        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})

//Card



for(var i = 0; i <= 5; i++){
    document.querySelectorAll(".card__inner")[i].onclick=card

    function card(){
    this.classList.toggle('is-flipped');
}
}



//Map

function iniciarMap(){
    var coord = {lat:-34.903764 ,lng: -56.1251888};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}




