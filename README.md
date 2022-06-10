<a href="https://dgsolutions.com.br/" target="_blank">
  <img src="https://dgsolutions.com.br/wp-content/uploads/2021/04/logo-dg-solutions-branca.png.webp" alt="Logo da DG Solutions" align="right">
</a>

# API - DG Solutions Challenge

## 🖥 Sobre o projeto

A aplicação consiste em uma API para inserção e busca de informações de pessoas cadastras em um banco de dados MySQL.

---

## 🚀 Executando a aplicação

## **Pré Requisitos**

Para executar a aplicaçãoo é importante que você tenha instalado as seguintes ferramentas em sua máquina:

* [Node.js](https://nodejs.org/en/)
* [MySQL Server](https://dev.mysql.com/doc/refman/8.0/en/)

### **🎲️ Rodando o servidor**

~~~
# clone o repositório
git clone https://github.com/matheuscarvalhoscm/dg-solutions-api.git

# acesse a pasta do servidor
cd dg-solutions-api

# instale as dependências
npm install

# em seu terminal ou interface gráfica (e.g.: MySQL Workbench), execute o script localizado em `src/scripts/seed.sql` para popular o banco de dados

# altere as variáveis de ambiente no arquivo `.env.example` para suas credenciais do mysql. após isso renomeie o arquivo para `.env`

# subindo o servidor
npm run dev

# O servidor inciará na porta:3003 - acesse http://localhost:3003
~~~

---
## 🌐 Endpoints 

### GET `/`

Retorna a lista com todas as pessoas cadastras no banco de dados:


```json
[
  {
    "id": 1,
    "name": "Ada Lovelace",
    "birthDate": "1957-12-10T03:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Alan Turing",
    "birthDate": "1951-06-12T03:00:00.000Z"
  },
  ...
]
```

### POST `/`
Insere uma nova pessoa no banco de dados. O corpo da requisição deve conter os seguintes parâmetros:

```json
{
  "name": "string",
  "birthDate": "string no formato yyyy-mm-dd" 
}
```

---
## 🛠️ Tecnologias
As seguintes tecnologias foram utilizadas na construção desse projeto:

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white&color=17366f)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%white&color=17366f)](https://expressjs.com/pt-br/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=fff&color=17366f)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white&color=17366f)](https://www.mysql.com/)

---

## 📧 Contato
[![](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=17366F)](https://www.linkedin.com/in/matheuscarvalhoscm/)
[![](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white&color=17366F)](mailtto:matheuscarvalhoscm@gmail.com)
