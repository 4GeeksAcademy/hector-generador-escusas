import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/gatobotas.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.onload = function() {
  // array de las palabras
  let who = ['El perro ', 'Mi abuela ', 'El cartero ', 'Mi pájaro '];
  let action = ['comió ', 'orinó ', 'aplastó ', 'rompió '];
  let what = ['mi tarea ', 'mi teléfono ', 'el coche '];
  let when =['antes de clase', 'cuando dormía', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras rezaba'];
  // Variables random
  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

  // Crear frase 
  document.getElementById("excuse").innerHTML = who[random1] + action[random2] + what[random3] + when[random4];
  
}