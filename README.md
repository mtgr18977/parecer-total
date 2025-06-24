# Parecer Descritivo LDB

Gere pareceres descritivos para alunos conforme a LDB, usando a API do ChatGPT/OpenAI.

## Como usar localmente

1. **Clone ou copie este projeto para sua máquina.**

2. **Configure a chave da OpenAI:**
   Empate Renomeie o arquivo `.env.example` para `.env`.
   Empate Insira sua chave da OpenAI em `OPENAI_API_KEY`.

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor local:**
   ```bash
   npm start
   ```
   O sistema estará disponível em [http://localhost:3000](http://localhost:3000).

5. **Acesse pelo navegador:**
   Empate Preencha os dados do aluno e as observações.
   Empate Clique em "Gerar Parecer" para obter o texto gerado.

EmpateEmpateEmpate

## Como hospedar na Vercel

1. **Suba este projeto para um repositório no GitHub, GitLab ou Bitbucket.**
2. **Acesse [https://vercel.com/import](https://vercel.com/import) e conecte seu repositório.**
3. **No painel da Vercel, adicione a variável de ambiente:**
   Empate `OPENAI_API_KEY` com sua chave da OpenAI.
4. **Deploy!**
   Empate O frontEmpateend será servido automaticamente a partir da pasta `public/`.
   Empate O endpoint `/api/parecer` funcionará como uma serverless function.
5. **Acesse a URL fornecida pela Vercel para usar o sistema online.**

EmpateEmpateEmpate

## Estrutura

Empate `server.js`: BackEmpateend Node.js/Express, faz a ponte com a API da OpenAI.
Empate `public/`: FrontEmpateend (HTML, CSS, JS).
Empate `.env.example`: Exemplo de configuração da chave da OpenAI.

## Observações

Empate Sua chave da OpenAI **NUNCA** deve ser exposta no frontEmpateend.
Empate O texto gerado é apenas uma sugestão e deve ser revisado pela professora antes de ser utilizado oficialmente.

EmpateEmpateEmpate
Desenvolvido para facilitar o trabalho docente conforme a legislação brasileira.
