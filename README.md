# 🛒 API de E-commerce - Projeto Base

Este projeto é uma API simples de e-commerce desenvolvida com **Node.js + Express + MySQL (Docker)**.

O objetivo é que cada aluno evolua essa API criando novos endpoints e funcionalidades.

---

# 🚀 Tecnologias utilizadas

* Node.js
* Express
* MySQL
* Docker

---

# 📦 Como rodar o projeto

## 1. Clonar o projeto

```bash
git clone https://github.com/WesleyGFirmino/E-commerce_-3B.git
cd E-commerce_-3B
```

---

## 2. Subir o banco de dados com Docker

Certifique-se de que o Docker está rodando na sua máquina.

```bash
docker-compose up -d
```

Isso irá:

* Criar o banco de dados
* Criar a tabela inicial
* Inserir um dado de exemplo

---

## 3. Instalar dependências

```bash
npm install
```

---

## 4. Rodar a aplicação

```bash
node app.js
```

Servidor disponível em:

```
http://localhost:3000
```

---

# 📌 Endpoints disponíveis

## GET /produtos

Lista todos os produtos

## GET /produtos/:id

Busca um produto por ID

## POST /produtos

Cria um novo produto

### Exemplo de JSON:

```json
{
  "nome": "Notebook"
}
```

---

# 🎯 Desafio para os alunos

Cada aluno deve criar **NOVOS ENDPOINTS**, simulando um sistema de e-commerce.

---

## 🔧 Sugestões de entidades

Você pode escolher **UMA ou MAIS**:

* Categorias
* Usuários
* Pedidos
* Carrinho
* Estoque
* Avaliações de produtos

---

## 📌 Exemplo: Categoria

### Rotas esperadas:

* `GET /categorias`
* `GET /categorias/:id`
* `POST /categorias`
* `PUT /categorias/:id`
* `DELETE /categorias/:id`

---

## 💡 Regras do desafio

* Criar **Controller**
* Criar **Service**
* Criar tabela no banco
* Integrar com MySQL
* Testar com Postman ou Insomnia

---

## 🧠 Objetivo

* Entender arquitetura em camadas
* Trabalhar com API REST
* Integrar com banco de dados
* Praticar organização de código

---

# ⚠️ Dicas importantes

Se precisar reiniciar o banco:

```bash
docker-compose down -v
docker-compose up -d
```

---

# 🧪 Ferramentas recomendadas

* Postman
* Insomnia
* DBeaver (para visualizar o banco)

---

# 👨‍🏫 Entrega

Cada aluno deve entregar:

* Código funcionando
* Novos endpoints criados
* Banco atualizado
* Testes realizados

---

# 🔥 Extra (para quem quiser ir além)

* Validação de dados
* Relacionamento entre tabelas (ex: produto + categoria)
* Autenticação simples

---

Boa prática e bons códigos 🚀
