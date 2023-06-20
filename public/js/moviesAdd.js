window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'green';
  });

  titulo.addEventListener('mouseout', () => {
    titulo.style.color = ''; 
  });
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let estadoSecreto = 0;

    let titleInput = document.querySelector('#titleInput');

    titleInput.addEventListener('keydown', (event) => {
    let key = event.key.toLowerCase();

    if (estadoSecreto === 0 && key === 's') {
      estadoSecreto = 1;
    } else if (estadoSecreto === 1 && key === 'e') {
      estadoSecreto = 2;
    } else if (estadoSecreto === 2 && key === 'c') {
      estadoSecreto = 3;
    } else if (estadoSecreto === 3 && key === 'r') {
      estadoSecreto = 4;
    } else if (estadoSecreto === 4 && key === 'e') {
      estadoSecreto = 5;
    } else if (estadoSecreto === 5 && key === 't') {
      estadoSecreto = 6;
    } else if (estadoSecreto === 6 && key === 'o') {
      estadoSecreto = 0;
      alert('SECRETO MAGICO');
    } else {
      estadoSecreto = 0;
    }
  });
}