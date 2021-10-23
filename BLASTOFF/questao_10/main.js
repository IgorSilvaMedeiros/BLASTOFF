function clicar() {
  var n1 = document.querySelector('.n1').value
  var valor = 1

  for (var count = 1; count <= n1; count++) valor *= count
  document.querySelector('.resultado').innerHTML = valor
}
