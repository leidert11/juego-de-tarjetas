let numeros16 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let numeros32 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16,];

const boton16 = document.getElementById("boton16");
const boton32 = document.getElementById("boton32");
const tablero = document.querySelector(".tablero");

let tarjetaSorteada = null;
let tarjetasDestapadas = 0;
let inicio16 = false;
let inicio32 = false;
let numeroTarjetas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let aciertos = 0;
let movimientos = 0;
let temporizador = false;
let resultado1 = "";
let resultado2 = "";
let tiempo = 0;

boton16.addEventListener("click", () => {
  tiempo = 60;
  numeroTarjetas = 16;
  tarjetaSorteada = numeros16;
  tablero.innerHTML = `
    <table>
    <tr>
      <td><button id="0" onclick="destapar(0)"></button></td>
      <td><button id="1" onclick="destapar(1)"></button></td>
      <td><button id="2" onclick="destapar(2)"></button></td>
      <td><button id="3" onclick="destapar(3)"></button></td>
    </tr>
    <tr>
      <td><button id="4" onclick="destapar(4)"></button></td>
      <td><button id="5" onclick="destapar(5)"></button></td>
      <td><button id="6" onclick="destapar(6)"></button></td>
      <td><button id="7" onclick="destapar(7)"></button></td>
    </tr>
    <tr>
      <td><button id="8" onclick="destapar(8)"></button></td>
      <td><button id="9" onclick="destapar(9)"></button></td>
      <td><button id="10" onclick="destapar(10)"></button></td>
      <td><button id="11" onclick="destapar(11)"></button></td>
    </tr>
    <tr>
      <td><button id="12" onclick="destapar(12)"></button></td>
      <td><button id="13" onclick="destapar(13)"></button></td>
      <td><button id="14" onclick="destapar(14)"></button></td>
      <td><button id="15" onclick="destapar(15)"></button></td>
    </tr>
  </table>`;
  boton32.disabled = true;
  /*sortear tarjetas*/
  numeros16 = numeros16.sort(() => Math.random() - 0.5);

  function contarTIempo() {
    mitempo = setInterval(() => {
      if (tiempo == 0) {
        clearInterval(mitempo);
        voltearTodas();
      } else if (aciertos === 8) {
        clearInterval(mitempo);
        alert('¡WIN!')
      } else {
        tiempo--;
        document.getElementById(
          "tiempo"
        ).innerHTML = `Tiempo ${tiempo} segundos`;
      }
    }, 1000);
  }
  contarTIempo();
});

boton32.addEventListener("click", () => {
  tiempo = 180;
  numeroTarjetas = 32;
  tarjetaSorteada = numeros32;
  tablero.innerHTML = `<table>
    <tr>
      <td><button id="0" onclick="destapar(0)"></button></td>
      <td><button id="1" onclick="destapar(1)"></button></td>
      <td><button id="2" onclick="destapar(2)"></button></td>
      <td><button id="3" onclick="destapar(3)"></button></td>
      <td><button id="4" onclick="destapar(4)"></button></td>
      <td><button id="5" onclick="destapar(5)"></button></td>
      <td><button id="6" onclick="destapar(6)"></button></td>
      <td><button id="7" onclick="destapar(7)"></button></td>
    </tr>
    <tr>
      <td><button id="8" onclick="destapar(8)"></button></td>
      <td><button id="9" onclick="destapar(9)"></button></td>
      <td><button id="10" onclick="destapar(10)"></button></td>
      <td><button id="11" onclick="destapar(11)"></button></td>
      <td><button id="12" onclick="destapar(12)"></button></td>
      <td><button id="13" onclick="destapar(13)"></button></td>
      <td><button id="14" onclick="destapar(14)"></button></td>
      <td><button id="15" onclick="destapar(15)"></button></td>
    </tr>
    <tr>
      <td><button id="16" onclick="destapar(16)"></button></td>
      <td><button id="17" onclick="destapar(17)"></button></td>
      <td><button id="18" onclick="destapar(18)"></button></td>
      <td><button id="19" onclick="destapar(19)"></button></td>
      <td><button id="20" onclick="destapar(20)"></button></td>
      <td><button id="21" onclick="destapar(21)"></button></td>
      <td><button id="22" onclick="destapar(22)"></button></td>
      <td><button id="23" onclick="destapar(23)"></button></td>
    </tr>
    <tr>
      <td><button id="24" onclick="destapar(24)"></button></td>
      <td><button id="25" onclick="destapar(25)"></button></td>
      <td><button id="26" onclick="destapar(26)"></button></td>
      <td><button id="27" onclick="destapar(27)"></button></td>
      <td><button id="28" onclick="destapar(28)"></button></td>
      <td><button id="29" onclick="destapar(29)"></button></td>
      <td><button id="30" onclick="destapar(30)"></button></td>
      <td><button id="31" onclick="destapar(31)"></button></td>
    </tr>
  </table>
    `;

  boton16.disabled = true;
  /*sortear tarjetas*/
  numeros32 = numeros32.sort(() => Math.random() - 0.5);

  if (aciertos === 16) {
    clearInterval(mitempo);
  }

  function contarTIempo() {
    mitempo = setInterval(() => {
      if (tiempo == 0) {
        clearInterval(mitempo);
        voltearTodas();
      } else if (aciertos === 16) {
        clearInterval(mitempo);
        alert('!WIN¡')
      } else {
        tiempo--;
        document.getElementById(
          "tiempo"
        ).innerHTML = `Tiempo ${tiempo} segundos`;
      }
    }, 1000);
  }

  contarTIempo();
});

function reset() {
  location.reload();
}

function voltearTodas() {
  document.getElementById("tiempo").innerHTML = `Tiempo acabado 😱`;
  for (let i = 0; i <= numeroTarjetas; i++) {
    document.getElementById(`${i}`).innerHTML = numeros32[i];
    document.getElementById(`${i}`).disabled = true;
  }
}

function destapar(indice) {
  tarjetasDestapadas++;
  if (temporizador == false) {
    temporizador = true;
  }
  if (tarjetasDestapadas == 1) {
    tarjeta1 = document.getElementById(indice);
    tarjeta1.innerHTML = tarjetaSorteada[indice];
    tarjeta1.disabled = true;
    resultado1 = tarjetaSorteada[indice];
  } else if (tarjetasDestapadas == 2) {
    tarjeta2 = document.getElementById(indice);
    tarjeta2.innerHTML = tarjetaSorteada[indice];
    tarjeta2.disabled = true;
    resultado2 = tarjetaSorteada[indice];

    if (resultado1 == resultado2) {
      tarjetasDestapadas = 0;
      aciertos++;
      movimientos++;
    } else {
      movimientos++;
      setTimeout(() => {
        tarjetasDestapadas = 0;
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjeta1.innerHTML = "";
        tarjeta2.innerHTML = "";
      }, 1000);
    }
    document.getElementById("aciertos").innerHTML = `aciertos: ${aciertos} 😎`;
    document.getElementById("movimientos").innerHTML = `Movimientos: ${movimientos} 💪`;
  }
}