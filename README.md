<img src="./imagem_readme.png" alt="Banner com a logo do Space Geek">
<br></br>

![Status](https://img.shields.io/badge/status-complete-green)
![React](https://img.shields.io/badge/ReactJs-18.2.0-informational)
![Repo size](https://img.shields.io/github/repo-size/Feehh32/space-geek)
![License](https://img.shields.io/github/license/Feehh32/space-geek)
![GitHub followers](https://img.shields.io/github/followers/Feehh32)
![last commit](https://img.shields.io/github/last-commit/Feehh32/space-geek)

<br></br>

<h1 style="color:#f9f9f9;">💻 Sobre o projeto</h1>

<p  style="color:#f9f9f9;font-size:16px;">
🌎 Space Geek - É uma plataforma e-commerce onde você pode encontrar tudo do universo Geek, desde action figures até jogos para os mais variados consoles.               
   Dentro da plataforma você é capaz de se cadastrar e ter acesso a todos os nossos produtos de maneira rápida e segura.
</p>

<p style="color:#f9f9f9; font-size:16px;">
 Projeto desenvolvido baseado no layout da terceira edição do challenge Front-end da Alura.
</p>
<br></br>

<h1 style="color:#f9f9f9;">⚒️  Tecnologias</h1>

<p style="color:#f9f9f9; font-size:16px;">
As seguintes ferramentas foram usadas na construção do projeto:
</p>

<ul>
    <li style="color:#f9f9f9;"><a href="https://pt-br.legacy.reactjs.org/">ReactJs</a></li>
    <li style="color:#f9f9f9;"><a href="https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics">HTML</a></li>
    <li style="color:#f9f9f9;"><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS</a></li>
    <li style="color:#f9f9f9;"><a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript">Javascript</a></li>
    <li style="color:#f9f9f9;"><a href="https://www.npmjs.com/package/json-server">Json-server</a></li>
</ul>

<br></br>

<h1 style="color:#f9f9f9;">🚀 Como executar o projeto</h1>

<p style="color:#f9f9f9; font-size:16px;">
💡 O projeto não tem um Back-end propriamente dito, por isso será necessário utilizar o json-server para mockar um servidor. 
</p>

<h2 style="color:#f9f9f9;"> Pré-requisistos</h2>
<p style="color:#f9f9f9; font-size:16px;"> 
É necessário utilizar um editor de código do seu gosto para rodar o projeto, mas recomendo o vs code onde o projeto foi construído.
</p>    

<br/>

<h2 style="color:#f9f9f9;"> 🧭 Rodando a aplicação web</h2>    
   
```bash

# Clone do repositório   

$ git clone https://github.com/Feehh32/space-geek.git   

# Vá até a pasta do projeto no seu terminal

$ cd space-geek

# Abra a pasta no seu visual studio code

$ code .  

# na pasta raiz do projeto no seu terminal (ou no terminal integrado do seu vs code) instale as dependencias do projeto 

$ npm install 

# Rode o json-server para testar todas as funcionalidades do projeto 

$ npm run json-server  

 # O servidor será aberta na porta:8000 - acesse http://localhost:8000  

 # Rode agora a aplicação em modo de desenvolvimento 

 $ npm start

 # A aplicação será aberta na porta:3000 - acesse http://localhost:3000 

``` 
<br/>

<p style="color:#f9f9f9; font-size:16px;"> 
No momento o projeto está utilizando uma api fake criada no json placeholder, se quiser testar todas as funcionalidades em seu ambiente de desenvolvimento, mude o endereço da api para o do json-server
</p>   


```jsx

{/* no arquivo routes.js vá para ProdutosProvider e na prop url: */}  

<ProdutosProvider url="https://my-json-server.typicode.com/Feehh32/space-geek-api/produtos">

  {/* altere para o endereço no json-server: */}

<ProdutosProvider url="http://localhost:8000">   

{/* Assim você terá acesso a todas as funcionalidades da apicação como a tela de login e as mensagens de rodapé. */} 

```
<br/>   

<h2 style="color:#f9f9f9;">📝 Licença </h2>   

<p style="color:#f9f9f9; font-size:16px;">Este projeto esta sobe a licença MIT.</p>

<br/>  

<p style="color:#f9f9f9; font-size:16px">
Feito com ❤️ por Fernando Pereira <a href="https://www.linkedin.com/in/fernando-pereira-710448247/">👋🏽 Entre em contato!</a>
</p>