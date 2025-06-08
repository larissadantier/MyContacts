<h1 align="center">
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/DWLsHRv/logo.png" alt="logo" border="0"></a>
</h1>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E6&labelColor=121214" alt="License">
</p>

<br>

<p align="center">
  <a href="https://ibb.co/3Wq4x0h"><img src="https://i.ibb.co/ctHkWNT/Home.png" alt="Home" border="0"></a>
</p>

## 🚀 Technologies

Technologies used in this project:

* [ReactJS](https://pt-br.reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [JavaScript](https://www.javascript.com/)
* [Express](https://expressjs.com/pt-br/)
* [Docker](https://www.docker.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Styled Components](https://styled-components.com/)
* [ESLint](https://eslint.org/)
* [EditorConfig](https://editorconfig.org/)

## ⭐ Implemented Features – Front-end

* React Router Dom – Routing system
* Reusable and dynamic components
* Contacts sorted in ascending and descending order
* Loading screen / dynamic spinner
* Custom hook
* CSS-in-JS (Styled Components)
* CRUD operations
* Responsive design

## ⭐ Implemented Concepts – Back-end

* Single Responsibility (separated into controllers, repositories, and middlewares)
* [Connection to our Docker container (database folder)](https://yarnpkg.com/package/pg)
* Database, tables, and rows creation using `uuid-ossp` for ID generation
* Routing system with Express
* CRUD operations

## 💻 Project

This project is under construction… 🚧👷‍♂️

It allows you to register a contact, edit, delete, sort in ascending/descending order, and search your contacts by name 😄.

## 😎 Getting Started

📖 To run this project locally, follow these steps:

* You need to have <a href="https://nodejs.org/en/">Node.js</a> installed on your machine.
* You need to have <a href="https://www.docker.com/">Docker</a> installed on your machine.
* You need to use <a href="https://classic.yarnpkg.com/en/">Yarn</a> or <a href="https://www.npmjs.com/">npm</a> for package installation.

### Installation

```bash
# Clone the repository
git clone https://github.com/larissadantier/MyContacts.git

# Install all dependencies

# Using npm
npm install

# Using Yarn
yarn install

# Run Docker – PostgreSQL [https://hub.docker.com/_/postgres]

# Commands:
# Pull the image
docker pull postgres

# Create and start the container
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

# If the container isn’t running, start it:
docker start pg

# Verify the container is running:
docker ps
```

## 🔖 Layout

See the project’s design at:

* [Web Layout (Figma)](https://www.figma.com/file/zhAwjW2RimyjccDgiY6luz/MyContacts)

You need a [Figma](http://figma.com/) account to access it 😉.

## 🤝 Contributing

Want to contribute and don’t know how? 💜
```
1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to your branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
```
## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👀 Author

<div align="center">
  <a href="https://app.rocketseat.com.br/me/larissadantier">
    <img align="center" style="border-radius: 100%;" src="https://avatars3.githubusercontent.com/u/61429963?s=400&u=0182f2fa598437842398e2f08f5dc6622df0b432&v=4" width="100px;" alt="Larissa Dantier"/>
  </a>
</div>
<br/>
<p align="center">Developed by Larissa Dantier 🚀</p>
<p align="center">Get in touch! 👏</p>
<div align="center">
  <a href="https://www.linkedin.com/in/larissadantier/" target="_blank">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>&nbsp;&nbsp;
  <a href="https://www.instagram.com/larissa.dantier/" target="_blank">
    <img src="https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white" />
  </a>&nbsp;&nbsp;
  <a href="mailto:larissa_dantier@hotmail.com">
    <img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" />
  </a>
</div>
