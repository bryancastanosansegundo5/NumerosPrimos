// Generar números y marcar pares, impares y primos con tres colores diferentes. Vea la imagen de abajo.
let input = document.querySelector(".input");
let button = document.querySelector(".enter");
// Crear un contenedor para los div generados
let container = document.createElement("div");
let contenedor = document.querySelector(".container");
let alerta = document.querySelector(".alerta");

function esPrimo(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function generarNumeros(numero) {
  // Vaciar el contenedor antes de generar nuevos números
  container.innerHTML = "";
  alerta.textContent = "";
  container.classList.add("contenedor");

  for (let index = 0; index < numero; index++) {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = "lightblue";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.textContent = index;

    if (esPrimo(index)) {
      div.style.backgroundColor = "red";
    } else if (index % 2 != 0) {
      div.style.backgroundColor = "yellow";
    } else if (index % 2 === 0) {
      div.style.backgroundColor = "green";
    }

    container.appendChild(div);
  }
  contenedor.appendChild(container);
}

window.addEventListener("load", () => {
  generarNumeros(51);
});

button.addEventListener("click", () => {
  value = input.value;
  let isNumeric = /^\d+$/.test(value);

  if (value === "") {
    input.placeholder = "Añada un valor";
  } else if (!isNumeric) {
    input.value = "";
    input.placeholder = "Añada un valor";

    alerta.textContent = "El valor debe ser numerico";
  } else if (isNumeric) {
    console.log("hola");
    input.value = "";
    input.placeholder = `se han generado los ${value} primeros numeros primos`;
    input.style.color = "initial";
    //una vez generados mostrar debajo del input un texto diciendo "se han generado X numeros primos"

    generarNumeros(value);
  }
});
