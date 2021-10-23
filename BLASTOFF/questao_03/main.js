function clicar() {
  var n1 = document.querySelector('.n1').value
  var n2 = document.querySelector('.n2').value
  var n3 = document.querySelector('.n3').value

  var min = Math.min(n1, n2, n3)
  document.querySelector('.resultado').innerHTML = min
}
