<div align="center">

### NPF Boilerplate

A **NestJS** + **Fastify** + **Docker** + **Prisma** + **Swagger** + **BiomeJS** boilerplate. 

**[NestJS](https://docs.nestjs.com/) | [Fastify](https://fastify.dev/) | [BiomeJS](https://biomejs.dev/)**

</div>

### 🚀 Getting started

Clone this repository or download it via ZIP.

Make sure that you have node, npm, docker and docker compose installed on your computer.

First, install the necessary packages with the following command:

```bash
$ npm install
```

After that, create a `.env` and a `.docker.env` file. The `.env` will be used for the development environment and the `.docker.env`
will be used for production.

Add the necessary variables on those file based on the `.env.example` and the `.docker.env.example`. Note that they may look similar
but they have small differences.

### ⚙️ Running the app

#### Development environment

After you installed the necessary packages and setup the `.env` files, you can run these commands:

```bash
# Starts the database
$ npm run docker:db

# Run the migrations to generate the db fields 
$ npx prisma migrate dev

# Start the server
$ npm run start:dev
```

#### Production environment

To start the production environment it's really simple. Simply run this command:

```bash
$ npm run docker 
```

This will start the PostgreSQL database, run the migrations and will start the server.

### 📜 License

[MIT](https://choosealicense.com/licenses/mit/)
