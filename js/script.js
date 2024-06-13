// function reload() {
//   const codigo = Math.floor(100000 + Math.random() * 900000);
//   $("#conta").text(codigo);
// }

function reload(numDigits) {
  const min = Math.pow(10, numDigits - 1); // Calcula o mínimo (por exemplo, 1000 para 4 dígitos)
  const max = Math.pow(10, numDigits) - 1; // Calcula o máximo (por exemplo, 9999 para 4 dígitos)
  const codigo = Math.floor(min + Math.random() * (max - min + 1)); // Gera o número aleatório dentro do intervalo calculado
  $("#conta").text(codigo); // Atualiza o elemento HTML com o novo código
}

function changebtn() {
  if (btn.innerHTML === "Claro?") {
    btn.innerHTML = "Escuro?";
  } else {
    btn.innerHTML = "Claro?";
  }
}

$(document).ready(function () {
  $("#btn").click(function () {
    $(".tema").toggleClass("claro escuro");
  });
});
