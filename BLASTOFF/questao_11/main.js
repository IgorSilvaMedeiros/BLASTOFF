function clicar() {
  var n1 = document.querySelector('.n1').value
  var n2 = document.querySelector('.n2').value
  var n3 = document.querySelector('.n3').value
  var n4 = document.querySelector('.n4').value
  var n5 = document.querySelector('.n5').value
  var n6 = document.querySelector('.n6').value
  var n7 = document.querySelector('.n7').value
  var n8 = document.querySelector('.n8').value
  var a1 = [n1, n2, n3, n4]
  var a2 = [n5, n6, n7, n8]
  const intersection = a1.filter(i => a2.includes(i))

  document.querySelector('.resultado').innerHTML = intersection
}
