# Projeto Talker Manager! :man_teacher:
Projeto desenvolvido em grupo durante o curso de Desenvolvimento Web na Trybe. Divulgado aqui como portfólio de aprendizado.

<details>
<summary><strong>Objetivos do projeto:</strong></summary>

  * Construir uma aplicação de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações.
  * Verificar se eu era capaz de:
    * Desenvolver uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers).
    * Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.
</details>
<details>
<summary><strong> Requisitos do projeto:</strong></summary>

  * Crie o endpoint GET /talker
  * Crie o endpoint GET /talker/:id
  * Crie o endpoint POST /login
  * Adicione as validações para o endpoint /login
  * Crie o endpoint POST /talker
  * Crie o endpoint PUT /talker/:id
  * Crie o endpoint DELETE /talker/:id
  * Crie o endpoint GET `/talker/search` e o parâmetro de consulta `q=searchTerm`
  * Requisitos Bônus:
    * Crie no endpoint GET `/talker/search` o parâmetro de consulta `rate=rateNumber`
    * Crie no endpoint GET `/talker/search` o parâmetro de consulta `date=watchedDate`
    * Crie o endpoint PATCH `/talker/rate/:id`
    * Crie o endpoint GET `/talker/db`
</details>
  
## Rodando o projeto localmente

Para rodar o projeto em sua máquina, abra seu terminal, crie um diretório no local de sua preferência com o comando `mkdir` e acesse o diretório criado com o comando `cd`:

```bash
mkdir meu-diretorio &&
cd meu-diretorio
```

Clone o projeto com o comando `git clone`:

```bash
git clone git@github.com:marcosadrianoti/tb-recipes-app.git
```

Acesse o diretório do projeto com o comando `cd`:

```bash
cd tb-recipes-app
```

Instale as dependências executando:

```bash
npm install
```

Execute a aplicação:

```bash
npm run start
```

Para executar os testes:

```bash
npm run test
```

Para executar os testes de cobertura:

```bash
npm run test-coverage
```
Para executar os testes com o Cypress:

```bash
npm run cy:open
```
