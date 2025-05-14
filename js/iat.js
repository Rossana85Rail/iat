function startIAT() {
  const code = document.getElementById('participant-code').value.trim().toUpperCase();
  if (code.length !== 6) {
    alert("Inserisci esattamente 3 lettere del nome e 3 del cognome (es. MARVER)");
    return;
  }

  document.getElementById('intro').style.display = 'none';
  document.getElementById('iat-container').style.display = 'block';

  const canvas = document.getElementById('iat-canvas');
  const ctx = canvas.getContext('2d');

  ctx.font = '24px Arial';
  ctx.fillText(`Benvenutə ${code}, il test inizierà presto...`, 50, 100);
}
