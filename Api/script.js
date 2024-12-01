document.getElementById('fetchQuote').addEventListener('click', () => {
    const quoteContainer = document.getElementById('quoteContainer');
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const errorMessage = document.getElementById('errorMessage');
  
    // Limpiar contenido previo
    quoteText.textContent = '';
    quoteAuthor.textContent = '';
    errorMessage.classList.add('d-none');
    
    // Mostrar indicador de carga
    quoteText.textContent = 'Cargando...';
  // API que devuelve frases aleatorias
    fetch('https://api.quotable.io/random')  
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener la frase.');
        }
        return response.json();
      })
      .then(data => {
        quoteText.textContent = data.content;
        quoteAuthor.textContent = `— ${data.author}`;
      })
      .catch(error => {
        quoteText.textContent = '';
        errorMessage.textContent = 'error no se pude obtener la frase. reanudar.';
        errorMessage.classList.remove('d-none');
      });
  });
  