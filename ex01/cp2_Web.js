let tempo = sessionStorage.getItem('tempoSessao');
tempo = tempo ? parseInt(tempo) : 0;

const contadorElemento = document.getElementById('contador');
const mensagemElemento = document.getElementById('mensagem');

setInterval(() => {
  tempo++;
  contadorElemento.textContent = `${tempo} segundos`;
      
  sessionStorage.setItem('tempoSessao', tempo);
  if (tempo === 10) {
    mensagemElemento.textContent = "Ta afim de interagir com algo não?";
  }
}, 1000);