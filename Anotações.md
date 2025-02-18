## Aula 02 - Setup do Projeto

Github do projeto:

- https://github.com/fullstackclubeducacao/fullstackweek-donalds

Extensões recomendadas:

- poimandres (tema)
- symbol icons
- prettier (lembre de colocar o prettier como default formatter e o format on save)
- ESLint
- Prisma (ORM Utilizado)
- postCSS Language Support
- Tailwind Intellisense
- GitLens
- Simple React Snippets
- Github Copilot

## Framework do projeto

Como é um projeto full=stack, será utilizado o NextJS na versão 15.

É necessário ter o Node instalado no mínimo na versão 20.

Instale no terminal do VSCode:

```
npx create-next-app@15.1.6 . (esse ponto é a pasta atual).
```

Assim que rodar o comando, aplique essas opções:

- Typescript Yes
- ESLint Yes
- TailwindCSS Yes
- src/ Yes
- App Router Yes
- TurboPack No
- Alias No

Em seguida rode npm run dev para rodar o projeto.

### Banco de dados

Instale o Prisma

- npm install prisma@6.2.1

E o prisma client

- npm install @prisma/client@6.2.1

Inicialize o prisma

- npx Prisma init

Em seguida vá no arquivo schema.prisma e faça as tabelas.

### O que é Enum no banco?

É um conjunto de valores, quando for criar um enum siga as convenções abaixo:

- Usar letras maiúsculas
- Usar Inglês

Quando a tabela estiver finalizada, rode o comando abaixo para formatar o arquivo:

- npx prisma format

### PostgreSQL

Como precisaremos de um Postgre rodando para criar as tabelas em um banco, para isso vamos usar uma plataforma chamada NeonDB, essa plataforma roda um postgres online sem custo.

- https://neon.tech/

Dentro do Neon você vai precisar criar um projeto

- nome: FSW Donalds
- Postgres Version: 17
- Cloud Service: AWS
- Region: N. Virginia
- Compute size: o mínimo possível para não ter custo.

Quando o projeto no Neon estiver criado, copie o código do Postgres que ele disponibiliza e na pasta .env do seu VSCode cole o link no código que tem o nome DATABASE_URL

### Migration

É um script que você roda que vai levar seu banco de dados do estado A para o estado B, atualmente nosso banco está sem nada, esse seria o estado A, o estado B é colocar as tabelas que criamos.

Rode esse comando no terminal para fazer a migration:

- npx prisma migrate dev

Esse processo leva um tempo, quando terminar ele pedirá um nome da migration, com relação a migrations devemos seguir algumas convenções:

- usar letras minúsculas.
- usar Underline no lugar de espaço.

### Commit

Quando for fazer um commit, siga o padrão de commits desse site:

- https://www.conventionalcommits.org/en/v1.0.0/
