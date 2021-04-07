<img alt="Ignite" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2fbacb7a-e460-44a3-8fc5-e66f96dae148%2Fcover-reactjs.png?table=block&id=51e4099a-6e2f-4d4b-ae94-f9fe75bb769d&width=5120&userId=1b109781-8635-4162-80d6-714377721793&cache=v2" />

<h3 align="center">
Challenge 04: Refactoring de classes and Typescript
</h3>

<p align="center">	
   <a href="https://www.linkedin.com/in/leonne-sousa-brito/">
      <img alt="LeonneBrito" src="https://img.shields.io/badge/-LeonneBrito-5965e0?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Languages" src="https://img.shields.io/github/languages/count/LeonneBrito/challenge04-ignite-bootcamp-reactjs?color=%235963C5" />
  <img alt="repo-size" src="https://img.shields.io/github/repo-size/LeonneBrito/challenge04-ignite-bootcamp-reactjs?color=%235761C3" />
  <img alt="lastcommit" src="https://img.shields.io/github/last-commit/LeonneBrito/challenge04-ignite-bootcamp-reactjs?color=%235761C3" />
  <img alt="License" src="https://img.shields.io/github/license/LeonneBrito/challenge04-ignite-bootcamp-reactjs?color=%235E69D7" />
  <img alt="Issues" src="https://img.shields.io/github/issues/LeonneBrito/challenge04-ignite-bootcamp-reactjs?color=%235965E0">
  <a href="mailto:contato@leonnebrito.com.br">
   <img alt="Email" src="https://img.shields.io/badge/-contato%40leonnebrito.com.br-%23525DCB" />
  </a>
</p>

## :rocket: About the challenge

In this challenge, you will have to create an application to train what you have learned so far in ReactJS

This will be an already functional application where its main objective is to perform two migration processes: from Javascript to Typescript and from Class Components to Function Components.

## :construction_worker: Preparing for the challenge

For this challenge, in addition to the concepts seen in class, we will use the JSON server to create a Fake API with food data.

### Fake API with JSON Server

Just as we use MirageJS in module 2 to simulate an API with transaction data from the dt.money application, we will use JSON Server to simulate an API that has food information.

Navigate to the created folder, open it in Visual Studio Code and execute the following commands in the terminal:

```bash
yarn
yarn server
```

Then you will see the message:

<img alt="server" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1abc3356-2936-4106-a4fe-a3fc8efd1373%2FUntitled.png?table=block&id=7fe88f6f-62c6-45c7-a898-d1672dbbe6bd&width=1420&userId=&cache=v2" width=300/>

Note that he started a fake API with the `/foods` feature in `localhost` on port `3333` from the information in the server.json file located at the root of your project. Accessing this route in your browser, you can see the return of the information already in JSON:

<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbc8fd976-5a03-453d-8510-cf8a6925d4e8%2FUntitled.png?table=block&id=9ecb7f94-78b0-4ec8-aabe-628b1e120275&width=2000&userId=&cache=v2" height=300/>

# :wrench: What should I edit in the application?

With the template already cloned, the dependencies installed and the fake API running, you must edit the following files:

- src/components/Food/index.jsx;
- src/components/Food/styles.js;
- src/components/Header/index.jsx;
- src/components/Header/styles.js;
- src/components/Input/index.jsx;
- src/components/Input/styles.js;
- src/components/Modal/index.jsx;
- src/components/ModalAddFood/index.jsx;
- src/components/ModalAddFood/styles.js;
- src/components/ModalEditFood/index.jsx;
- src/components/ModalEditFood/styles.js;
- src/pages/Dashboard/index.jsx;
- src/pages/Dashboard/styles.js;
- src/routes/index.jsx;
- src/services/api.js;
- src/styles/global.js;
- src/App.js;
- src/index.js.

All of these files must be migrated from Javascript to Typescript. In addition, files that have components in class must be migrated to functional components.

# :atom_symbol: Preparing Typescript environment

Since this is a CRA project without TypeScript, you must first install the dependencies / types and configure TS. Our suggestion is to create a new CRA project with Typescript and compare the current structure with the one you need. Performing this comparison, you can easily see that:

- You need to install `typescript`
- It is necessary to create a configuration file `tsconfig.json`. You can even use the automatically generated configuration in the CRA Typescript template to create your file.
- It is necessary to create a file `react-app-env.d.ts` with the content:

```js
/// <reference types="react-scripts" />
```
- It is necessary to install the typing of the libraries.

By configuring this setup, you should be able to work normally with Typescript in your project.

# :page_facing_up: License

This project is under a license [MIT](./LICENSE).

Challenge proposed with 💜 by Rocketseat 👋 [Join this great community!](https://discordapp.com/invite/gCRAFhc)
