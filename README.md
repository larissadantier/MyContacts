<h1 align="center">
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/DWLsHRv/logo.png" alt="logo" border="0"></a>
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E6&labelColor=121214" alt="License">
</p>

<br>

<p align="center">
  <a href="https://ibb.co/3Wq4x0h"><img src="https://i.ibb.co/ctHkWNT/Home.png" alt="Home" border="0"></a>
</p>

## 🚀 Tecnologias

Tecnologias utilizadas durante o projeto:

- [ReactJS](https://pt-br.reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com/)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [Styled Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [EditorConfig](https://editorconfig.org/)

## ⭐ Funcionalidades implantadas - Front-end
- React Router Dom - Sistemas de Rotas
- Componentes Reutilizaveis e Dinâmicos
- Contatos ordenados de forma crescente e decrescente
- Tela de Loading / Spinner dinâmico
- Hook Personalizado
- CSS-in-JS
- CRUD
- Responsividade

## ⭐ Conceitos implantados - Back-end
- Responsabilidade Única (Separados por folders controllers, repositories e middlewares)
- [Conexão com o nosso Container no Docker (folder - database)](https://yarnpkg.com/package/pg)
- Criação da DATABASE, Tabelas, linhas e utilizando o uuid-ossp para geração do id
- Sistema de rotas utilizando o Express
- CRUD

## 💻 Projeto

Este projeto está em construção.. 🚧👷‍♂️

Projeto que permite você realizar o registro de um contato, editar, deletar, ordenar de forma crescente e decrescente e pesquisar o seu contato através de seu nome. 😄.

## 😎 Iniciando 

📖 Para rodar o projeto localmente você precisará seguir algumas instruções.

- É necessário que o <a href="https://nodejs.org/en/">NodeJS</a> esteja instalado em sua máquina.
- É necessário que o <a href="https://www.docker.com/">Docker</a> esteja instalado em sua máquina.
- É necessário utilizar <a href="https://classic.yarnpkg.com/en/">Yarn</a> ou <a href="https://www.npmjs.com/">Npm</a> para a instalação de pacotes.

### Instalação
```bash
# Clone o repositório
git clone https://github.com/larissadantier/MyContacts.git

# Instale todos os pacotes

- Npm
npm install

- Yarn
yarn install

# Rodar o Docker - Postgres[https://hub.docker.com/_/postgres]

- Comandos
Baixando a imagem - postgres: docker pull postgres
Criando o container: docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres (Já inicia automaticamente)
Caso não tenha iniciado o container, faça o seguinte comando: docker start pg
Verificar se o container está rodando: docker ps


```
## 🔖 Layout

Visualize o layout do projeto através do link a seguir:

- [Layout Web](https://www.figma.com/file/zhAwjW2RimyjccDgiY6luz/MyContacts) 

Você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo 😉.

## Contribuições
```
Você quer contribuir para o projeto e não sabe como? 💜

1. Dê Fork no projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Comite as alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça o push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
```
## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👀 Autor
<div align="center">
  <a href="https://app.rocketseat.com.br/me/larissadantier">
   <img align="center" style="border-radius: 100%;" src="https://avatars3.githubusercontent.com/u/61429963?s=400&u=0182f2fa598437842398e2f08f5dc6622df0b432&v=4" width="100px;" alt=""/>
  </a>
</div>
<br/>
<p align="center">Desenvolvido por Larissa Dantier 🚀 </p> 
<p align="center">Entre em contato! 👏 </p>
<div align="center">
<a href="https://www.linkedin.com/in/larissadantier/" target="_blank">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>&nbsp;&nbsp;
 <a href="https://www.instagram.com/larissa.dantier/" target="_blank">
    <img src="https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white" />        
  </a>&nbsp;&nbsp;
 <a href="mailto:larissa_dantier@hotmail.com">
    <img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" />        
  </a>&nbsp;&nbsp; 
</div>
    


