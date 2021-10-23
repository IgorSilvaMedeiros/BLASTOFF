function clicar() {
  var n1 = document.querySelector('.n1').value
  var resultado = (parseInt(n1) * parseInt(9)) / parseInt(5) + parseInt(32)
  document.querySelector('.resultado').innerHTML = resultado
}
