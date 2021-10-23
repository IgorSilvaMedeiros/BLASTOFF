function clicar() {
  var n1 = document.querySelector('.n1').value
  var divisores = 0

  for (var count = 1; count <= n1; count++) if (n1 % count == 0) divisores++

  if (divisores == 2) document.querySelector('.resultado').innerHTML = 'É primo'
  else document.querySelector('.resultado').innerHTML = 'Não é primo'
}
