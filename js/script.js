function reload(){
  const codigo = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("conta").innerHTML = codigo
}

function changea() {
  var body = document.getElementById("corpo");
  body.classList.toggle("claro");
  body.classList.toggle("escuro");

  var link1 = document.getElementById("link1");
  link1.classList.toggle("claro");
  link1.classList.toggle("escuro");

  var link2 = document.getElementById("link2");
  link2.classList.toggle("claro");
  link2.classList.toggle("escuro");

  var link3 = document.getElementById("link3");
  link3.classList.toggle("claro");
  link3.classList.toggle("escuro");

  var layout = document.getElementById("layout");
  layout.classList.toggle("claro");
  layout.classList.toggle("escuro");
  
  var contas = document.getElementById("conta");
  contas.classList.toggle("claro");
  contas.classList.toggle("escuro");

  var btn = document.getElementById("btn");
btn.classList.toggle("claro");
btn.classList.toggle("escuro");

}

function changeb(){
  if (btn.innerHTML==="Claro?") {
    btn.innerHTML = "Escuro?";
  } else {
    btn.innerHTML="Claro?"
  }
}