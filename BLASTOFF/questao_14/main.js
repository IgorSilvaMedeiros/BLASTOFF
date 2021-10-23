function clicar() {
  var t1 = document.querySelector('.t1').value

  let palavraInvertida = []

  for (let i = t1.length - 1; i >= 0; i--) {
    palavraInvertida.push(t1[i])
  }

  palavraInvertida = palavraInvertida.toString().replace(/,/g, '').trim()

  if (palavraInvertida.toLowerCase() === t1.toLowerCase()) {
    document.querySelector('.resultado').innerHTML = 'É um palíndromo'
  } else {
    document.querySelector('.resultado').innerHTML = 'Não é um palíndromo'
  }
}
