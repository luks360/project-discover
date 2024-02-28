function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // Get the img tag
  const img = document.querySelector('#profile img')

  // Replace image
  if (html.classList.contains('light')) {
    // If light mode is active, add light image
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos escuros, uma jaqueta de couro, uma camisa preta por baixo, fundo degradê nas cores roxo e azul')
  } else {
    // If light mode is not active, add normal image
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo')
  }
}