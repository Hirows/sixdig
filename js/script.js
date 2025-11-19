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

$(document).ready(function() {
    // Quando o botão "Adicionar" é clicado
    $('#salvarnum').click(function() {
        var salvarnovonum = $('#conta').val();

            // Criar um novo elemento li com a nova tarefa
            var novonum = $('<p>').text(salvarnovonum);
            
            // Adicionar botões para marcar como concluído e remover
            var removerButton = $('<button>').text('Remover');
            
            // Adicionar classes CSS aos botões
            removerButton.addClass('remover');
            
            // Anexar os botões ao elemento li
            novonum.append(removerButton);
            
            // Anexar o elemento li à lista
            $('#salvos').append(novonum);

    });
    // Quando um botão "Remover" é clicado
    $('#salvos').on('click', '.remover', function() {
        var tarefa = $(this).parent();
        tarefa.remove();
    });
});