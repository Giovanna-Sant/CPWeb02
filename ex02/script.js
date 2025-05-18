document.getElementById('btnDecifrar').addEventListener('click', decifrarSequencia);
document.getElementById('btnLimpar').addEventListener('click', limparCampos);

function decifrarSequencia() {
  const t1 = parseInt(document.getElementById('val1').value);
  const t2 = parseInt(document.getElementById('val2').value);
  const t3 = parseInt(document.getElementById('val3').value);

  if ([t1, t2, t3].some(n => isNaN(n) || n <= 0)) {
    alert('Por favor, insira três números inteiros positivos.');
    return;
  }

  const diff1 = t2 - t1;
  const diff2 = t3 - t2;
  const isPA = diff1 === diff2;

  const isPG = (t1 !== 0 && t2 % t1 === 0) && (t3 % t2 === 0) &&
               ((t2 / t1) === (t3 / t2)) && (t2 / t1 > 0);

  let padrao = '';
  let sequencia = [t1, t2, t3];

  if (isPA) {
    padrao = 'Progressão Aritmética';
    for (let i = 3; i < 8; i++) {
      sequencia[i] = sequencia[i - 1] + diff1;
    }
  } else if (isPG) {
    padrao = 'Progressão Geométrica';
    const razao = t2 / t1;
    for (let i = 3; i < 8; i++) {
      sequencia[i] = sequencia[i - 1] * razao;
    }
  } else {
    padrao = 'Padrão Personalizado (soma dos dois valos anteriores)';
    for (let i = 3; i < 8; i++) {
      sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }
  }

  document.getElementById('padrao').textContent = 'Padrão identificado: ' + padrao;
  document.getElementById('sequencia').textContent = 'Sequência completa: ' + sequencia.join(', ');
}

function limparCampos() {
  document.getElementById('val1').value = '';
  document.getElementById('val2').value = '';
  document.getElementById('val3').value = '';
  document.getElementById('padrao').textContent = '';
  document.getElementById('sequencia').textContent = '';
}
