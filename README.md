# Labenu Music Awards
Como você deve saber muito bem, o nosso querido chefinho Astrodev é uma pessoa com Networking incrível e ele conhece vários artistas estrelados. Além disso, ele também é um grande ~~megalomaníaco~~ visionário e está planejando fazer um grande evento: o **LAMA**, *Labenu Musical Awards*, um festival  com várias bandas famosas para a formatura da sua turma e, no final, vocês podem eleger a banda que mais gostaram! Entretanto, na opinião dele, vocês só serão merecedores se entregarem um sistema impecável que permita o gerenciamento completo desses shows.

Para isso já deixamos algumas tabelas prontas para vocês não precisarem se preocupar com a modelagem do banco. Deixamos também um template do projeto já com a estrutura da parte de usuários. Vocês podem usá-las a vontade, mas, se quiser fazer do zero sem esse auxílio, também pode.


# Labenu Music Awards (LAMA)

### Detalhes:

O objetivo deste projeto é criar um sistema para  um festival de musica, o objetivo do projeto é ter uma melhor gestão do evento, buscando organizar as  bandas, shows, compra de ingressos, etc... 


### Integrante:

- Cassiano Moura - https://www.linkedin.com/in/moura-cassiano/

## Tecnologias/Ferramentas

As tecnologias utilizados ao longo do projeto foram: Node.js,
TypeScript, Jest, Mysql.

## Dependências

    -Express.js
    -Knex.js
    -Cors
    -Dotenv
    -Uuid
    -Json Web Token(JWT)
    -Bcrypt.js

## Passos de execução do projeto:

1. Este sistema deve estar integrado à um banco de dados Mysql, aonde estarão armazenadas todas nossas informações.
   
 

## Funcionalidades

→ Cadastro: Cadastro de usuários(email, nome e senha), pode-se ser um usuário("normal" / "admin");

→ Login: Para realizar o login, deve-se informar o e-mail e senha, o retorno deve conter o token de autenticação do usuário;

→ Registrar a banda;

→ Visualização de detalhes sobre a banda;

→ Adicionar um show a uma data;

→ Visualizar todos os shows de uma data.