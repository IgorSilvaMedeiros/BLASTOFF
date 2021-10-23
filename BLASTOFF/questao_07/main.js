function clicar() {
  var n1 = document.querySelector('.n1').value
  var n2 = document.querySelector('.n2').value
  var n3 = document.querySelector('.n3').value
  const lista = [n1, n2, n3]

  const pares = lista.filter(number => {
    if (number % 2 === 0) {
      return number
    }
  })
  document.querySelector('.resultado').innerHTML = pares
}
