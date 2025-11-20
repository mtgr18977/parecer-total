# Parecer Descritivo LDB

Gere pareceres descritivos para alunos conforme a LDB, usando a API do Gemini.

## Como usar localmente

1. **Clone ou copie este projeto para sua máquina.**

2. **Configure a chave do Gemini:**
    Renomeie o arquivo `.env.example` para `.env`.
    Insira sua chave do Gemini em `GEMINI_API_KEY`.

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor local:**
   ```bash
   npm start
   ```
   O sistema estará disponível em [http://localhost:3000](http://localhost:3000).
    Não abra o arquivo `index.html` diretamente, utilize essa URL para garantir
    que as requisições ao backend funcionem corretamente.

5. **Acesse pelo navegador:**
    Preencha os dados do aluno e as observações.
    Clique em "Gerar Parecer" para obter o texto gerado.

Se preferir, instale o aplicativo como PWA. No Chrome ou Safari móvel, toque em
"Compartilhar" e depois em "Adicionar à Tela de Início". Assim ele funcionará
como um app independente e até mesmo offline.



## Como hospedar na Vercel

1. **Suba este projeto para um repositório no GitHub, GitLab ou Bitbucket.**
2. **Acesse [https://vercel.com/import](https://vercel.com/import) e conecte seu repositório.**
3. **No painel da Vercel, adicione a variável de ambiente:**
    `GEMINI_API_KEY` com sua chave do Gemini.
4. **Deploy!**
    O frontend será servido automaticamente a partir da pasta `public/`.
    O endpoint `/api/parecer` funcionará como uma serverless function.
5. **Acesse a URL fornecida pela Vercel para usar o sistema online.**



## Estrutura

 `server.js`: Backend Node.js/Express, faz a ponte com a API do Gemini.
 `public/`: Frontend (HTML, CSS, JS).
 `.env.example`: Exemplo de configuração da chave do Gemini.

## Observações

 Sua chave do Gemini **NUNCA** deve ser exposta no frontend.
 O texto gerado é apenas uma sugestão e deve ser revisado pela professora antes de ser utilizado oficialmente.


Desenvolvido para facilitar o trabalho docente conforme a legislação brasileira.
