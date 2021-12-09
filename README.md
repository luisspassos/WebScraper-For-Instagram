- <h3>Também leia esse <a href="https://github.com/luisspassos/WebScraper-For-Instagram/blob/main/README-pt_br.md">README em português</a></h3>

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
    <img alt="Instagram_Logo" width="200" title="Instagram" src="https://github.com/luisspassos/WebScraper-For-Instagram/blob/main/assets/instagram_logo.png" />
</h1>

<h4 align="center"> 
	🚧  WebScraper For Instagram 🤖 Concluded 🚀 🚧
</h4>

<p align="center">
 <a href="#about-the-project">About</a> •
 <a href="#functionalities">Functionalities</a> •
 <a href="#how-to-run">How to run</a> • 
 <a href="#technologies">Technologies</a> • 
 <a href="#author">Author</a> • 
 <a href="#license">License</a>
</p>

<a name="about-the-project">
	
## 💻 About the project

🤖 WebScraper For Instagram - is a data miner for Instagram, made to extract photos, reels and posts in general.

Project designed for people who want a library that extracts data from Instagram quickly and easily.

---
	
<a name="functionalities">

## ⚙️ Functionalities

- [x] People can get receive the information through your Instagram post link.
- [x] Users can return a JSON that has:
  - [x] Videos;
    - URL;
  - [x] Images;
    - URL;
  - [x] Comments:
    - Message;
    - Author avatar;
    - The at sign/author's name;	
  - [X] Post Author Information;
    - Avatar;
    - Nickname;
    - At sign;
  - [X] Post date;
  - [X] Description;

- [x] There is an error message if a. 

---
	
<a name="how-to-run">

## 🚀 How to run the dependency

This project runs on the Back End.
	
### Prerequisites

Before starting, you will need to have the following tool installed on your machine:
[Node.js](https://nodejs.org/en/)<br>
Also it's nice to have an editor to work with code like [VSCode](https://code.visualstudio.com/)

#### ⬇️ Downloading the dependency

```bash

# Navigate to your project folder
cd project/

# Install with NPM package
npm i webscraper_for_instagram

# Or with yarn
yarn add webscraper_for_instagram

```
#### 🪄 Running

```js
const fetchInstagram = require("webscraper_for_instagram");

(async()=> {

const post = await fetchInstagram("https://www.instagram.com/p/CXChwP3Pvke/");

console.log(post);

})()
```

- <h3><a href="https://github.com/luisspassos/WebScraper-For-Instagram/blob/main/output.json">OUTPUT</h3>
	
---
	
<a name="technologies">

## 🛠 Technologies

The following tools were used in the construction of the project:
	
- <a href="https://nodejs.org/en/">Node JS</a>
- <a href="https://pptr.dev/">Puppeteer</a>

> See the file <a href="https://github.com/luisspassos/WebScraper-For-Instagram/blob/main/package.json">package.json</a>

#### [](https://github.com/luisspassos/WebScraper-For-Instagram#utilit%C3%A1rios)**Utilities**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**

---

## 💪 How to contribute to the project

1. **Fork** the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save the changes and create a commit message telling you what you've done: `git commit -m "feature: My new feature"`
4. Submit your changes: `git push origin my-feature`
> If you have any questions, check out this [how to contribute on GitHub guide](./CONTRIBUTING.md)

---

<a name="author">

## 🦸 Author

<img style="border-radius: 50%;" src="https://github.com/luisspassos.png" width="100px;" alt="My Avatar"/>
<p>Luís Passos 🚀</p> 

[![Gmail Badge](https://img.shields.io/badge/-luis.passos013@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:luis.passos013@gmail.com)](mailto:luis.passos013@gmail.com)

---
	
<a name="license">

## 📝 License

This project is under license [MIT](https://github.com/luisspassos/WebScraper-For-Instagram/blob/main/LICENSE).

Made with ❤️ by Luís Passos 👋🏽
