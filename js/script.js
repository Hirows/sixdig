function reload(numDigits) {
  const min = Math.pow(10, numDigits - 1);
  const max = Math.pow(10, numDigits) - 1;
  const codigo = Math.floor(min + Math.random() * (max - min + 1));
  $("#conta").text(codigo);
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
    $('#salvarnum').click(function() {
        var numeroSalvo = $('#conta').text();
        
        if(numeroSalvo.trim() !== '') {
            var novoItem = $('<li>').text(numeroSalvo);
            var removerButton = $('<button>').text('Remover').addClass('remover');
            novoItem.append(removerButton);
            $('#salvos').append(novoItem);
        }
    });
    
    $('#salvos').on('click', '.remover', function() {
        $(this).parent().remove();
    });
});