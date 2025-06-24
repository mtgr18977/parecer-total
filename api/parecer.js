const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método não permitido' });
    return;
  }

  const { nome, turma, escola, apoio } = req.body;
  if (!nome || !turma || !escola || !apoio) {
    res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'OPENAI_API_KEY não configurada.' });
    return;
  }

  try {
    const prompt = `
Você é um(a) professor(a) do ensino fundamental no Brasil. Escreva um parecer descritivo para o(a) aluno(a) ${nome}, da turma ${turma}, da escola ${escola}, conforme a LDB, considerando as seguintes observações: ${apoio}
O texto deve ser formal, objetivo, e adequado para relatórios escolares.
    `;

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Você é um(a) professor(a) especialista em pareceres descritivos conforme a LDB.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 400,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const parecer = response.data.choices[0].message.content.trim();
    res.status(200).json({ parecer });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar parecer. Verifique sua chave da OpenAI e tente novamente.' });
  }
};
