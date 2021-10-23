function clicar() {
  var n1 = document.querySelector('.n1').value
  var n2 = document.querySelector('.n2').value
  if (n1 % n2 == 0 && n1 < n2)
    document.querySelector('.resultado').innerHTML = 'Múltiplos'
  else document.querySelector('.resultado').innerHTML = 'Não são Múltiplos'
}
