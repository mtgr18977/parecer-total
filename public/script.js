document.getElementById('parecerform').addEventListener('submit', async function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const turma = document.getElementById('turma').value.trim();
  const escola = document.getElementById('escola').value.trim();
  const professora = document.getElementById('professora').value.trim();
  const turno = document.getElementById('turno').value;
  const data = document.getElementById('data').value;
  const anoLetivo = document.getElementById('ano-letivo').value.trim();
  const apoio = document.getElementById('apoio').value.trim();
  const resultadoDiv = document.getElementById('resultado');

  resultadoDiv.innerHTML = '<p>Gerando parecer, aguarde...</p>';

  try {
    const response = await fetch('/api/parecer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, turma, escola, professora, turno, data, anoLetivo, apoio })
    });

    const data = await response.json();

    if (response.ok) {
      resultadoDiv.innerHTML = `
        <h2>Parecer Gerado:</h2>
        <textarea id="parecer-texto" rows="10" style="width:100%">${data.parecer}</textarea>
        <button id="baixar-pdf" type="button" style="margin-top:16px; width:100%; font-size:1.1rem; font-weight:600; background:#2563eb; color:#fff; border:none; border-radius:8px; padding:12px; cursor:pointer;">Baixar PDF</button>
      `;
      // Adiciona evento para baixar PDF
      document.getElementById('baixar-pdf').addEventListener('click', function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4"
        });
        const texto = document.getElementById('parecer-texto').value;
        const linhas = doc.splitTextToSize(texto, 180);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(13);
        let y = 20;
        linhas.forEach(linha => {
          if (y > 280) {
            doc.addPage();
            y = 20;
          }
          doc.text(linha, 15, y);
          y += 8;
        });
        doc.save("parecer.pdf");
      });
    } else {
      resultadoDiv.innerHTML = `<p class="erro">${data.error || 'Erro ao gerar parecer.'}</p>`;
    }
  } catch (err) {
    resultadoDiv.innerHTML = '<p class="erro">Erro de conexão com o servidor.</p>';
  }
});
