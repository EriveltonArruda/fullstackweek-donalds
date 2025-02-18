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

Quando o projeto no Neon estiver criado, copie o código do Postgres que o Neon disponibiliza e na pasta .env do seu VSCode cole o link no código que tem o nome DATABASE_URL

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

### seed

É um script utilizado para colocar dados no banco.

Os dados que serão colocados no seed estão no repositório da aula, crie um arquivo chamado seed.ts na pasta do prisma e cole o código.

### onDelete

O script do seed deleta os restaurantes antes de rodar para deixar o banco sempre limpo, imagine que você implemente futuramente uma dashboard que deleta o restaurante, então se deletar um restaurante, também quero deletar suas categorias e seus produtos certo?, para isso usamos o onDelete: Cascade nos relacionamentos.

Essa alteração será feita no arquivo schema da pasta prisma.

Sempre que fizer alguma alteração no prisma, sempre rode uma migration para refletir isso no seu banco

### tsNodes

Para executar o seeds.ts precisaremos de uma biblioteca que executa códigos Typescript, coloque esse comando no Terminal:

- npm install -D ts-node@10.9.2

Só usamos ele em ambiente de desenvolvimento, por isso o -D na instalação.

Agora vá no arquivo package.json e adicione o comando:

"prisma": {
"seed": "ts-node ./prisma/seed.ts"
}

Agora rode o comando:

- npx prisma db seed

### Dica de commit

Sempre faça commits bem específicos, no lugar de fazer 1 commit com 10 arquivos, faça 2 commits com 3 ou 4 arquivos cada, isso facilita a transitar as mudanças feitas no código.

### Dicas de Next

A pasta App que está dentro de src usa o AppRouter que foi marcado na instalação do Next.

Toda pasta que você colocar dentro da pasta app e todo arquivo dentro da pasta que está dentro da pasta app que tiver o nome "page.tsx", essa pasta será tratada como uma rota.

No VSCode você consegue criar uma pasta ao criar um arquivo, por exemplo:

- products/page.tsx (será criada uma pasta products com um arquivo page.tsx)

### Shadcn UI

Essa biblioteca nos dá componentes prontos, eles também são compatíveis com o tailwind.

Instale com o comando: (usaremos a versão 2.3.0 no projeto)

- npx shadcn@2.3.0 init

Aplique essas opções na hora da instalação:

- style: Default
- Base color: Neutral
- css variables: yes
- dependências: Use --legacy-peer-deps

Outro ponto do shadcn é que você precisa instalar os componentes que você utilizará, em outras bibliotecas você baixa toda a biblioteca, por exemplo:

- npx shadcn@2.3.0 add button (adicionará o componente do botão)

Os componentes ficam na pasta src/components.

Para usar, vá na pasta page.tsx e importe o componente.

### Arquivo layout

Todo código global entre as páginas será colocado nesse arquivo.

### ESLint

Garante um conjunto de regras dentro do código.

Será criada uma regra de importação para que os arquivos de import biblioteca venham primeiro e os imports de arquivos fiquem embaixo, para isso será necessário instalar um plugin:

- npm install -D eslint-plugin-simple-import-sort@12.1.1

Em seguida importe no arquivo ESLint.
