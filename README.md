- <h3>Também leia esse <a href="./README-pt_br.md">README em português</a></h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/badge/languages-1-green">
 
  <img src="https://img.shields.io/github/repo-size/luisspassos/WebScraper-For-Instagram" alt="Repo Size">
  
   <a href="https://www.instagram.com/">
       <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"> 
  </a>
 
  <a href="https://github.com/luisspassos/WebScraper-For-Instagram/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/luisspassos/WebScraper-For-Instagram">  
  </a>
  
  <a href="https://github.com/luisspassos/WebScraper-For-Instagram/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/luisspassos/WebScraper-For-Instagram" alt="GitHub license">
  </a>  
      
   <a href="https://github.com/luisspassos/WebScraper-For-Instagram/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/luisspassos/WebScraper-For-Instagram?style=social">
  </a>
  
  <a href="https://github.com/luisspassos/">
    <img src="https://img.shields.io/badge/Feito%20por-luisspassos-FFA500" alt="luisspassos Github">
  </a>     
 
</p>
<h1 align="center">
    <img alt="Instagram_Logo" width="200" title="Instagram" src="./assets/instagram_logo.png" />
</h1>

<h4 align="center"> 
	🚧  WebScraper For Instagram 🤖 Concluded 🚀 🚧
</h4>

<p align="center">
 <a href="#sobre-o-projeto">About</a> •
 <a href="#funcionalidades">Functionalities</a> •
 <a href="#como-executar">How to run</a> • 
 <a href="#tecnologias">Technologies</a> • 
 <a href="#autor">Author</a> • 
 <a href="#licença">License</a>
</p>

<a name="sobre-o-projeto">
	
## 💻 About the project

🤖 WebScraper For Instagram - is a data miner for Instagram, made to extract photos, reels and posts in general.

Project designed for people who want a library that extracts data from Instagram quickly and easily.

---
	
<a name="funcionalidades">

## ⚙️ Functionalities

- [x] People can get receive the information through your Instagram post link.
- [x] Users can return a JSON that has:
  - [x] Videos;
    - URL;
  - [x] Images;
    - URL;
  - [x] Comments:
    - Message;
    - Avatar do autor;
    - O arroba/nome do autor;	
  - [X] Informações do Autor da postagem;
    - Avatar;
    - Apelido;
    - Arroba;
  - [X] Data de postagem;
  - [X] Descrição;

- [x] Há mensagem de erro caso aconteça um. 

---
	
<a name="como-executar">

## 🚀 Como executar a dependência

Este projeto é executado no Back End.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina a seguinte ferramenta:
[Node.js](https://nodejs.org/en/)<br>
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### ⬇️ Baixando a dependência

```bash

# Navegue até a pasta do seu projeto
cd project/

# Instale com o pacote NPM
npm i webscraper_for_instagram

# Ou com o yarn
yarn add webscraper_for_instagram

```
#### 🪄 Executando

```js
const fetchInstagram = require("webscraper_for_instagram");

(async()=> {

const post = await fetchInstagram("https://www.instagram.com/p/CXChwP3Pvke/");

console.log(post);

})()
```

- <h3><a href="./output.json">OUTPUT</h3>
	
---
	
<a name="tecnologias">

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
	
- <a href="https://nodejs.org/en/">Node JS</a>
- <a href="https://pptr.dev/">Puppeteer</a>

> Veja o arquivo <a href="https://github.com/luisspassos/WebScraper-For-Instagram/blob/main/package.json">package.json</a>

#### [](https://github.com/luisspassos/WebScraper-For-Instagram#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

<a name="autor">

## 🦸 Autor

<img style="border-radius: 50%;" src="https://github.com/luisspassos.png" width="100px;" alt="Meu Avatar"/>
<p>Luís Passos 🚀</p> 

[![Gmail Badge](https://img.shields.io/badge/-luis.passos013@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:luis.passos013@gmail.com)](mailto:luis.passos013@gmail.com)

---
	
<a name="licença">

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Luís Passos 👋🏽
