require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para ler JSON
app.use(express.json());

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para gerar parecer
app.post('/api/parecer', async (req, res) => {
  const { nome, turma, escola, apoio } = req.body;
  if (!nome || !turma || !escola || !apoio) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Montar prompt para a OpenAI
    const prompt = `
Você é um(a) professor(a) do ensino fundamental no Brasil. Escreva um parecer descritivo para o(a) aluno(a) ${nome}, da turma ${turma}, da escola ${escola}, conforme a LDB, considerando as seguintes observações: ${apoio}
O texto deve ser formal, objetivo, e adequado para relatórios escolares.
    `;

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt3.5turbo',
        messages: [
          { role: 'system', content: 'Você é um(a) professor(a) especialista em pareceres descritivos conforme a LDB.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 400,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const parecer = response.data.choices[0].message.content.trim();
    res.json({ parecer });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar parecer. Verifique sua chave da OpenAI e tente novamente.' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
