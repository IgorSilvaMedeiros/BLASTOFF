function clicar() {
  var n1 = document.querySelector('.n1').value
  var tabuada = ''

  for (var count = 1; count <= 10; count++)
    tabuada += n1 + ' x ' + count + ' = ' + n1 * count + '<br />'
  document.querySelector('.resultado').innerHTML = tabuada
}
