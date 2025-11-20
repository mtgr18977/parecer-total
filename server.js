require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.GEMINI_API_KEY) {
  console.warn('Aviso: GEMINI_API_KEY não configurada. O endpoint /api/parecer retornará erro.');
}

// Middleware para ler JSON
app.use(express.json());
// Habilitar CORS para permitir requisições de outras origens
app.use(cors());

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para gerar parecer
app.post('/api/parecer', async (req, res) => {
  const { nome, turma, escola, professora, turno, data, anoLetivo, apoio, modelo } = req.body;
  if (!nome || !turma || !escola || !professora || !turno || !data || !anoLetivo || !apoio || !modelo) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }
  // Validação do parâmetro modelo
  const allowedModelos = ['modelo1', 'modelo2', 'modelo3']; // Substitua pelos nomes reais dos modelos permitidos
  if (!allowedModelos.includes(modelo)) {
    return res.status(400).json({ error: 'Modelo inválido.' });
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY não configurada.' });
  }

  try {
    // Montar prompt para o Gemini
    const prompt = `
Você é um(a) professor(a) do ensino fundamental no Brasil. Escreva um parecer descritivo detalhado para o(a) aluno(a) ${nome}, da turma ${turma}, da escola ${escola}, turno ${turno}, professora regente ${professora}, referente ao ano letivo de ${anoLetivo}. A data do parecer é ${data}. Considere as seguintes observações: ${apoio}

Siga rigorosamente o modelo abaixo, que é um exemplo real de parecer feito por uma professora. Estruture o texto conforme os tópicos do exemplo, utilize linguagem formal, detalhada, e inclua recomendações à família e sugestões de intervenção, sempre que possível. Personalize o texto conforme as informações fornecidas.

--- EXEMPLO DE PARECER ---
PARECER DESCRITIVO – 1º TRIMESTRE – ANO LETIVO DE 2025
Aluna: Larissa Martins da Silva
Turma: 21 – 2º Ano do Ensino Fundamental I
Turno: Tarde
Escola: Presidente Arthur da Costa e Silva
Professora regente: Silvana Maria Pilotti Duarte 

Querida família,
Através deste parecer, compartilho com vocês um pouco sobre o desenvolvimento da nossa querida Larissa ao longo deste período letivo.
Larissa é uma criança encantadora, dedicada, participativa, que demonstra muita vontade de aprender, se desenvolver e interagir com seus colegas e com os professores.

No campo cognitivo, Larissa realiza com segurança atividades de pareamento de cores, formas, palavras e frases com imagens, além de já reconhecer as vogais, demonstrando progresso no processo de alfabetização. Na matemática, já é capaz de contar oralmente até 5 e reconhece os numerais até 3, o que representa um avanço muito importante para seu desenvolvimento, considerando suas necessidades e seu ritmo de aprendizagem.

Sabemos e reconhecemos o empenho, o carinho e a dedicação da família no acompanhamento e no desenvolvimento da Larissa. Contudo, entendemos ser importante reforçar algumas recomendações, que visam potencializar ainda mais seu desenvolvimento, tanto na escola quanto no ambiente familiar:
• Estimular a comunicação oral: continuar incentivando Larissa a se expressar por meio de conversas, perguntas, músicas, histórias e brincadeiras que favoreçam o uso da linguagem oral.
• Ampliar o trabalho com numerais: estimular a contagem e o reconhecimento dos números, utilizando situações do dia a dia, como contar brinquedos, alimentos, passos ou objetos, sempre reforçando, de forma lúdica, os numerais já reconhecidos e introduzindo gradativamente os demais.
• Fortalecer a coordenação motora: propor atividades como pintura com materiais adaptados (lápis grossos, pincéis com suporte), rasgar papel, amassar massinha, jogos de encaixe e atividades sensoriais, que contribuem diretamente para o desenvolvimento motor e cognitivo.

--- FIM DO EXEMPLO ---

Siga o padrão acima, adaptando para o(a) aluno(a) ${nome}, turma ${turma}, escola ${escola}, ano letivo ${anoLetivo} e data ${data}, considerando as observações: ${apoio}. O texto deve ser formal, detalhado, estruturado e incluir recomendações à família. Continue até o final do parecer, sem cortar o texto.
    `;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const parecer = response.data.candidates[0].content.parts[0].text.trim();
    res.json({ parecer });
  } catch (error) {
    console.error('Erro ao chamar o Gemini:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao gerar parecer. Verifique sua chave do Gemini e tente novamente.' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
