// const data = "28/05/2024"
// const newFormatDate = data.split("/").reverse().join("-");

// console.log()

// Script hora
// const data = new Date();

// const hora = data.getHours().toString().padStart(2, "0");
// const minutos = data.getMinutes().toString().padStart(2, "0");
// const segundos = data.getSeconds().toString().padStart(2, "0");

// const fullHour = `${hora - 3}:${minutos}:${segundos}`;

// console.log(fullHour);

const data = new Date();
const timezone = "America/Sao_Paulo";
const parametros = {
  timeZone: timezone,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const dataFormatada = data.toLocaleString("pt-BR", parametros);
console.log(dataFormatada);
