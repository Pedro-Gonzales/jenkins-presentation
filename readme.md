# API de busca de materias e docentes 🤓

## 🚀 Começando

Projeto feito para apresentação do seminário sobre jenkins.

### 📋 Pré-requisitos

Node
Docker

### 🔧 Instalação

    Para baixar as dependências, no terminal do VsCode digitar o comando: npm install;
    Para rodar o projeto em ambiente de desenvolvimento é necessário rodar os comandos:
        npm run dev


### 📖 Manual de usabilidade Jenkins

 * Passo 1 - rodar docker-compose up;
 * Passo 2 - No navegador, abrir o jenkins;
 * Passo 3 - Para pegar a chave de acesso basta digitar os comandos: 
    * docker exec -it containerId bash
    * cat /var/jenkins_home/secrets/initialAdminPassword
* Passo 4 - Após informar a secret, instalar plugins recomendados e finalizar instalação;
* Passo 5 - Instalar plugin do node
* Passo 5 - Após reiniciar o jenkins, entrar em configuração -> Tools -> NodeJs Installations
* Passo 5 - Criar pipeline
* Passo 5 - Rodar pipeline

## 🛠️ Construído com

* [Node](https://nodejs.org/en) - JavaScript runtime environment
* [Vitest](https://vitest.dev) - Unit Test Framework
* [Docker](https://www.docker.com) - Docker is a platform designed to help developers build, share, and run modern applications.
* [Jenkins](https://www.jenkins.io) - Open source automation server

