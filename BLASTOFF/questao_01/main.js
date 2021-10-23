function clicar() {
  var n1 = document.querySelector('.n1').value
  var n2 = document.querySelector('.n2').value
  var n3 = document.querySelector('.n3').value
  var n4 = document.querySelector('.n4').value
  var n5 = document.querySelector('.n5').value

  var resultado =
    (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5)) /
    parseInt(5)
  document.querySelector('.resultado').innerHTML = resultado
}
