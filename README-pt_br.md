- <h3>Also read this <a href="./README.md">README in English.</a></h3>

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
  
  <a href="https://github.com/luispassos/">
    <img src="https://img.shields.io/badge/Feito%20por-luisspassos-FFA500" alt="luisspassos Github">
  </a>     
 
</p>
<h1 align="center">
    <img alt="Instagram_Logo" width="200" title="Instagram" src="./assets/instagram_logo.png" />
</h1>

<h4 align="center"> 
	🚧  WebScraper For Instagram 🤖 Concluído 🚀 🚧
</h4>
VER ISSO DEPOISSSSSSSSSSSSSSSSS
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

🤖 WebScraper For Instagram - é um garimpador de dados para o Instagram, feito para extrair fotos, Reels e posts em geral.


Projeto desenvolvido para as pessoas que querem uma biblioteca que extraia dados do Instagram de forma rápida e fácil.

---

## ⚙️ Funcionalidades

- [x] As pessoas podem obter receber as informações por meio de seu link do post do Instagram.
- [x] Os usuários podem receber como retorno um JSON que há:
  - [x] Vídeos;
    - URL;
  - [x] Imagens;
    - URL;
  - [x] Comentários:
    - Mensagem;
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

## 🚀 Como executar a dependência

Este projeto é executado no Back End.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/). 
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

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
	
- <a href="https://nodejs.org/en/">Node JS</a>
- <a href="https://pptr.dev/">Puppeteer

> Veja o arquivo  [package.json]("https://github.com/luisspassos/WebScraper-For-Instagram/blob/main/package.json")

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

## 🦸 Autor

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/380327?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Thiago Marinho</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago/" title="Rocketseat">🚀</a>
 <br />

[![Twitter Badge](https://img.shields.io/badge/-@tgmarinho-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/tgmarinho)](https://twitter.com/tgmarinho) [![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/tgmarinho/) 
[![Gmail Badge](https://img.shields.io/badge/-tgmarinho@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:tgmarinho@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Thiago Marinho 👋🏽 [Entre em contato!](https://www.linkedin.com/in/tgmarinho/)

---

##  Versões do README

[Português 🇧🇷](./README.md)  |  [Inglês sem emojis 🇺🇸](./README-en.md) | [Portugues sem logo  🇧🇷](./README-sem-logo.md) 
