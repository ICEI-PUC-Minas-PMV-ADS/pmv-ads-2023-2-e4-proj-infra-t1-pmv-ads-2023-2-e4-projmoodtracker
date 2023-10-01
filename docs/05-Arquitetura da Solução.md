# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta etapa foi definida a estruturação do software  em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Diagrama de Classe](img/diagramaClasse.png)

## Modelo ER (Projeto Conceitual)

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

![Entidade e Relacionamento](img/entidadeRelacionamento.png)

## Esquema Relacional
O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

![Esquema Relacional](img/esquemaRelacional.png)

## Banco de Dados

A escolha do MongoDB como banco de dados NoSQL para uma aplicação de registro de textos e humor, seguindo o método de escrita de um diário, é justificada pelas seguintes razões:

### Flexibilidade na Modelagem de Dados:
O MongoDB permite uma modelagem flexível de dados, adequada para a natureza livre e variável das entradas de diário.

### Suporte a Dados Textuais:
É eficaz para armazenar e consultar dados textuais, essenciais para registros de diário.

### Escalabilidade:
O MongoDB é escalável horizontalmente, acomodando o crescimento de dados ao longo do tempo.

### Modelo de Dados Proposto:
O modelo de dados NoSQL proposto para a aplicação de registro de textos e emoções consiste em duas principais coleções: "Diários" e "Emoções".

### Coleção "Diários":
A coleção "Diários" é responsável por armazenar as entradas individuais do diário. Cada documento nessa coleção terá os seguintes campos:

- _id: Um identificador exclusivo para cada entrada do diário.
- data: A data e hora da entrada.
- texto: O texto da entrada do diário.
- id_usuario: O identificador do usuário que fez a entrada.
- emoção_id: Um campo de referência à coleção "Emoções", indicando a emoção associada à entrada (pode ser nulo).

### Coleção "Emoções"
A coleção "Emoções" armazena informações sobre as emoções registradas pelos usuários em suas entradas do diário. Cada documento nessa coleção terá os seguintes campos:

- _id: Um identificador exclusivo para cada registro de emoção.
- nome: O nome da emoção (por exemplo, "Feliz", "Triste", "Empolgado").
- descrição: Uma descrição mais detalhada da emoção.
- cor: Uma cor associada à emoção para fins de visualização.
- id_usuario: O identificador do usuário que associou a emoção (pode ser nulo).


Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

A arquitetura da solução foi simplificada em três categorias: cliente, API e Banco de Dados (conforme figura abaixo).

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projmoodtracker/assets/59934631/7b520abf-2b9f-46ea-a9ca-8eeb6fef6e30)

### Camada de Cliente:

React para Web: Desenvolveu-se a versão da web do aplicativo React usando componentes React e bibliotecas como o React Router para gerenciar a navegação.

React Native para Dispositivos Móveis: Usou-se o React Native para criar versões nativas do aplicativo para iOS e Android. Compartilhou-se a maior quantidade possível de código entre as versões da web e móvel, aproveitando bibliotecas e estruturas de componentes compatíveis.

Gestão de Estado: Utilizou-se bibliotecas de gerenciamento de estado como Redux ou MobX para compartilhar e gerenciar o estado do aplicativo entre as diferentes plataformas.

Autenticação e Autorização: Implementou-se um sistema de autenticação seguro, como JWT (JSON Web Tokens), para proteger as rotas e recursos do aplicativo.

### Camada de API:

ASP.NET: Desenvolveu-se a camada de API REST usando ASP.NET. Foi possível escolher entre ASP.NET Core ou ASP.NET Framework, dependendo das necessidades e preferências.

Roteamento: Configurou-se rotas RESTful que correspondiam a endpoints de recursos, como /api/users para gerenciar usuários ou /api/products para produtos.

Lógica de Negócios: Implementou-se a lógica de negócios no backend para processar solicitações do cliente, validar dados e interagir com o banco de dados.

Middleware de Autenticação: Utilizou-se middleware de autenticação para verificar tokens JWT e autenticar solicitações de clientes.

### Camada de Banco de Dados:

MongoDB: Utilizou-se o MongoDB como banco de dados NoSQL para armazenar dados de forma flexível e escalável.

Esquema: Definiu-se os esquemas de coleção de acordo com as necessidades do aplicativo, estando preparados para lidar com mudanças nos esquemas ao longo do tempo.

### As ferramentas empregadas no projeto foram:

- Editor de código : Visual Studio Code;
- Emulador da aplicação: Android Expo, NPM;
- Ferramentas de comunicação: Whatsapp, Teams;
- Gerencimaneto do projeto: GitHub Projects e MS Project;
- Ferramentas de desenho de tela (wireframing): MarvelAPP, Heflo e Figma;
- Ferramentas para diagramas (conceitual e lógico): Diagrams.net, Astah, Lucid Charts, BRMW e Figma;
- Versionamento de código: GitHub e GitHub desktop.

O editor de código foi escolhido pelo grupo pois é o mais prático e acessível para os integrantes, além de facilitar a alternação de quem está editando o código e salvando diretamente no reposítorio através do GitHub Desktop. Tem um bom dicionário de erros no código e permite acompanhar alterações em tempo real através do emulador do android studio.

## Hospedagem

O backend da aplicação está hospedado na plataforma Azure, garantindo uma infraestrutura sólida e confiável. 

O banco de dados, por sua vez, encontra-se em um servidor dedicado e seguro, assegurando a integridade dos dados. 

A aplicação estará assim que pronto, disponível para download na loja Google Play, atendendo a todos os utilizadores do sistema Android.

## Qualidade de Software

Qualidade de Software
Sabemos que a qualidade de software é a medida em que um software atende aos requisitos do usuário e aos padrões de qualidade estabelecidos. Isso inclui a capacidade do software de funcionar corretamente, de ser fácil de usar e de ser seguro e confiável. A qualidade de software também pode ser medida pela eficiência e eficácia do software, como o seu desempenho por exemplo.

Sendo assim o aplicativo do MoodTracker é um exemplo de software de qualidade. Ele é desenvolvido para ajudar os usuários a relatar suas experiências, tanto positivas quanto negativas para ter uma valula de escape, relatar seus problemas. refletir e acompanhar seu humor. O aplicativo possui uma interface intuitiva e fácil de usar, o que o torna acessível para usuários de todos os níveis de habilidade.

Além disso, é uma aplicação de alta segurança e perfomance, voltada para o uso pessoal. Ele terá uma escala de humor e opção de exportar as informações sempre que quiser.

Em resumo, o MoodTracker é um exemplo de software de qualidade que oferece aos usuários um conjunto abrangente de recursos para os usuários conseguirem relatar seus dilemas diários e auxiliar-los para acompanhar e relatar todas as informações que desejarem incluir. Com sua interface intuitiva e recursos de segurança avançados, o aplicativo é a escolha perfeita para quem deseja criar um acompanhamento diário, tanto do humor quanto de nossos dilemas diários com eficiência e confiabilidade.

Funcionalidade:
Ajuda os usuários a criar relatos diários.
Incluir o nivel de humor diário
Oferece recursos de para exportar e filtros.
Confiabilidade:
É seguro e confiável.
Possui autenticação(Login/Cadastro) de usuários.
Garante a proteção das informações pessoais dos usuários.
Portabilidade:
Disponível como aplicativo móvel.
Pode ser usado em diferentes dispositivos móveis (tablets/smartphones).
Tem suporte a diferentes sistemas operacionais móveis.
Manutenção:
Possui atualizações regulares para melhorias e correções;
Oferece suporte técnico aos usuários;
Mantém um registro de erros e bugs para solucioná-los de forma eficaz.
