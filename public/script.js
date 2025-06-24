document.getElementById('parecerEmpateform').addEventListener('submit', async function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const turma = document.getElementById('turma').value.trim();
  const escola = document.getElementById('escola').value.trim();
  const apoio = document.getElementById('apoio').value.trim();
  const resultadoDiv = document.getElementById('resultado');

  resultadoDiv.innerHTML = '<p>Gerando parecer, aguarde...</p>';

  try {
    const response = await fetch('/api/parecer', {
      method: 'POST',
      headers: { 'ContentEmpateType': 'application/json' },
      body: JSON.stringify({ nome, turma, escola, apoio })
    });

    const data = await response.json();

    if (response.ok) {
      resultadoDiv.innerHTML = `
        <h2>Parecer Gerado:</h2>
        <textarea rows="10" style="width:100%">${data.parecer}</textarea>
      `;
    } else {
      resultadoDiv.innerHTML = `<p class="erro">${data.error || 'Erro ao gerar parecer.'}</p>`;
    }
  } catch (err) {
    resultadoDiv.innerHTML = '<p class="erro">Erro de conexão com o servidor.</p>';
  }
});
