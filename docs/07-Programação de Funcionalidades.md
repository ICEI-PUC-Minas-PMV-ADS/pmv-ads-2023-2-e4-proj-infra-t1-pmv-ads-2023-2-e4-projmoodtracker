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

![Usuarios Controller](img/UsuariosControllers.png)

<h4>RegistrosController</h4>
Determina as rotas da classe Registros, permitindo a criação, atualização e deleção de registros de usuários na aplicação.
Também possui rotas para um obtenção de todos os registros cadastrados na aplicação e obtenção dos registros por ID ou Usuário.

![Registros Controller](img/RegistrosControllers.png)

<h4>NotaMensalController</h4>
Determina as rotas da classe NotaMensal, permitindo a criação e atualização das notas mensais de usuários na aplicação.
Também possui rotas para um obtenção de todos as notas cadastradas na aplicação e obtenção das notas por ID ou Usuário.

![NotaMensal Controller](img/NotaMensalControllers.png)

## Aplicação WEB

A aplicação WEB foi desenvolvida no editor Visual Studio Code utilizando a biblioteca JavaScript React, especialmente útil para SPAs (Single Page Applications) e possuindo como principal característica a componentização. Foi utilizado o Vite junto ao React, que oferece um template pré-configurado e suporte HMR, e styled-components, biblioteca que permite utilizar o CSS diretamente no JavaScript.

Iniciando o a atendimento aos requisitos RF-001	e RF-005, implementamos o front-end das telas com as funcionalidades de login, cadastro e recuperação de senha. As pastas  SignIn, SignUp e ChangePass contém o arquivo index.jsx que contém tanto o código HTML quanto as funcionalidades da página em JavaScript, e o arquivo styled.js contém a estilização CSS especifica da página, sendo que demais componentes são importados da pasta 'components' do projeto.
 
Abaixo estão as descrições das páginas e links para as pastas com os códigos:

<br>**SignIn** <br>
A págnia Login é onde o usuário pode navegar para a área de cadastro ou recuperação de senha. Nela existem todas as funções necessárias para a autenticação do usuário como validação de preenchimento dos campos, função de login e passagem de valores para o contexto do usuário.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projmoodtracker/tree/37bb5aea5ad3a452974193310e8784772907c4a3/src/WEB/MoodTracker_WEB/pages/SignIn
">Link do código</a>

<br>**SignUp**<br>
A págnia Login é onde o usuário pode navegar para a área de cadastro ou recuperação de senha. Nela existem todas as funções necessárias para a autenticação do usuário como validação de preenchimento dos campos, função de login e passagem de valores para o contexto do usuário.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/pages/Login.tsx">Link do código</a>

<br>**ChangePass**<br>
A página de cadastro é onde contém o formulário para a criação de uma conta para utilizar a aplicação. Nela contém as funções necessárias para o cadastro como a verificação dos dados preenchidos e envio dos dados para a API.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/pages/Cadastro.tsx">Link do código</a>

Para o atendimento dos requisitos... foram geradas as páginas

<br>**Main.tsx**<br>
O Arquivo Main.tsx é o componente que utiliza a biblioteca NativeStackNavigator para apresentar a página para o usuário que realizou autenticação na aplicação. A página Caixa.tsx.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/navigations/main.tsx">Link do código</a>


Para a autenticação dos usuários....

<br>**Route.tsx**<br>
O arquivo Route.tsx é o principal componente do aplicativo (utilizado no APP.tsx) pois é responsável por definir as rotas de navegação que utiliza a informação de autenticação no contexto do usuário para definir quais páginas serão exibidas.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/navigations/Route.tsx">Link do código</a>

<br>**Auth.tsx**<br>
O Arquivo Auth.tsx é o componente que utiliza a biblioteca NativeStackNavigator para apresentar as páginas para o usuário que não realizou a autenticação na aplicação. São elas Inicio, Login, Cadastro e Recuperação de senha.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/navigations/Auth.tsx">Link do código</a>

<br>**Auth.services.tsx**<br>
O Arquivo Auth.services.tsx contém todas as funções e procedimentos para autenticação do usuário assim como a obtenção dos dados para consumo do contexto do usuário dentro da aplicação.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/services/auth.services.tsx">Link do código</a>






