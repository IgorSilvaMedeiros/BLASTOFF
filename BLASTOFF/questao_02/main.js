function clicar() {
  var n1 = document.querySelector('.n1').value
  var n2 = document.querySelector('.n2').value
  var resultado = parseInt(n1) / parseInt(n2)
  document.querySelector('.resultado').innerHTML = resultado
}
