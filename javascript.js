// //Declaración de una función a la que quiero
// //llamar cuando hagan click sobre el H1
// //Antes usaba onclick="manejarClick()"
// //en el html
// //Ahora consigo lo mismo activando un
// //eventListener en el H1
//
// function manejarClick(){
//   alert("Me has hecho click.");
// }
//
// //Ahora le añado al elemento h1 una "oreja"/eventListener
// //que escucha a ver si se produce un click sobre el h1
// document.querySelector("h1").addEventListener("click",manejarClick);
//
// document.querySelector("h1").addEventListener("mouseout",function noTeVayas(){
//                                                                             alert("Porfa, no te quites de encima mio.");
//                                                                           });

//Quiero añadir ahora eventListeners a todos los botones
//para que me avise que le hacen click a cualquiera de ellos

//Selecciono y guardo todos los botones en un array
var arrayConLosBotones = document.querySelectorAll(".caja");

//Averiguo la longitud del array
//o sea el numero de botones que había
var numeroDeBotones = arrayConLosBotones.length;

//Ahora recorro uno por uno los botones
//usando un bucle de tipo 'for' y en cada
//repetición añado un listener a el botón que corresponda

for (var i = 0; i < numeroDeBotones; i++) {
  //Aqui añado el listener
  arrayConLosBotones[i].addEventListener("click", function tocarTOM1() {
    //var tom1 = new Audio("sonidos/tom-1.mp3");
    //tom1.play();
    //alert(this.innerHTML);
    //Extraemos la letra del botón
    //para saber que sonido reproducir
    var letraBoton = this.innerHTML;
    //Ahora uso la letra en un switch
    //para reflejar los 7 casos posibles
    animarBoton(letraBoton);
    switch (letraBoton) {
      case "w":
        var tom1 = new Audio("sonidos/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sonidos/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sonidos/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sonidos/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var tom5 = new Audio("sonidos/snare.mp3");
        tom5.play();
        break;
      case "k":
        var tom6 = new Audio("sonidos/crash.mp3");
        tom6.play();
        break;
      case "l":
        var tom7 = new Audio("sonidos/kick-bass.mp3");
        tom7.play();
        break;
    } //fin del switch

  }); //Fin de la función
} //Fin del for

//Ahora voy a intentar detectar
//que presionan una tecla
document.addEventListener("keypress",function (event){
  animarBoton(event.key);
  switch (event.key) {
    case "w":
      var tom1 = new Audio("sonidos/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sonidos/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sonidos/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sonidos/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom5 = new Audio("sonidos/snare.mp3");
      tom5.play();
      break;
    case "k":
      var tom6 = new Audio("sonidos/crash.mp3");
      tom6.play();
      break;
    case "l":
      var tom7 = new Audio("sonidos/kick-bass.mp3");
      tom7.play();
      break;
  } //fin del switch
}); //fin de la función

//Ahora voy a crear una función para animar los botones
function animarBoton(letra){
  var botonActivo= document.querySelector("."+letra);
  botonActivo.classList.add("presionado");

  setTimeout(function(){
    botonActivo.classList.remove("presionado");
  },500);
}
