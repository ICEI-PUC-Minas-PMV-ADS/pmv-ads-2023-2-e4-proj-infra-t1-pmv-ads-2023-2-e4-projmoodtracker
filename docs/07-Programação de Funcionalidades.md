# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

O presente projeto é composto por uma API, Aplicação WEB e Aplicação Mobile, seguimos realizando o desenvolvimento do projeto por meio Local. Ao finalizar as alterações necessárias e realizando commit para o presente respositório. Outro membro do grupo pode importar as atualizações por meio do GitHub Desktop e dar andamento por meio das ferramentes de forma local.

## API
A API, que torna o projeto uma aplicação distriuída, foi desenvolvida através do Visual Studio Community 2022 na linguagem C#. Para as funcionalidades necessárias para o projeto foi necessário a adição de alguns pacotes nuget em suas dependências, sendo eles:

> - Bcrypt.Net V4.0.3
> - Microsoft.AspnetCore.Authentication.JwtBearer V6.0.22
> - Microsoft.EntityFrameworkCore V7.0.11
> - Microsoft.EntityFramerworkCore.Sqlite V6.0.21
> - Microsoft.EntityFramerworkCore.SqlServer V7.0.11
> - Microsoft.EntityFramerworkCore.Tools V7.0.11

<h3>Controllers:</h3>
A API possui os controladores de cada modelo (classes) para a determinação das rotas de acesso para obtenção ou manipulação dos dados no banco de dados. <br>

<h4>UsuariosController</h4>
Determina as rotas da classe Usuarios, permitindo a criação, atualização e autenticação do usuário na aplicação.
Também possui rotas para um obtenção de todos os usuários cadastrados na aplicação e obtenção dos dados de um usuário específico pelo nome de usuário.






> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
