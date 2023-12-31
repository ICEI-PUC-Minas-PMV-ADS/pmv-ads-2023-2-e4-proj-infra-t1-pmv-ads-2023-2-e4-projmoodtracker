# Plano de Testes de Software

O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

##  1. Requisitos para Realização do Teste

As seguintes ferramentas serão empregadas neste projeto de testes:

- Navegador da Internet <br>-Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

##  2. Ambiente de teste

- Testes deverão ser desenvolvido com um pequeno volume de dados, baseados em testes manuais.
- Os dados serão criados em tempo real, por desenvolvedores da aplicação e usuários.
- A aplicação será desenvolvida em linguagem React e React Native
- Todos os testadores deverão ter configurações de desktop/mobile similares aos que serão disponibilizadas aos colaboradores da empresa.

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

## Abordagem e Detalhamento de Testes

|**Caso de Teste**|**CT-01 –Login**|
| :-: | :-: |
|Requisito Associado|RF-001 <br> - A aplicação deverá permitir que o usuário acesse o sistema informando usuário e senha válidos.|
|Objetivo do Teste|Verificar se o usuário consegue efetuar login no sistema.|
|Passos|<br>-Acessar o navegador.<br>-Informar ao navegador à URL da aplicação.<br>-Informar dados de login.<br>-Selecionar o botão ENTRAR para efetuar o login.|
|Critério do Êxito| O usuário consegue acessar a página principla do sistema|

|**Caso de Teste**|**CT-02 –Realizar registro de texto**|
| :-: | :-: |
|Requisito Associado|RF-002 <br> - A aplicação deverá permitir que o usuário cadastre um registro de texto.|
|Objetivo do Teste|Verificar se o usuário consegue registar texto.|
|Passos|<br>-Acessar o navegador.<br>-Informar ao navegador à URL da aplicação.<br>-Informar dados de login.<p>-Selecionar o botão ENTRAR para efetuar o login.<br>-Selecionnar o botão "ESCREVER TEXTO".<br>-Sistema habilita um campo de texto.<br>-Escrever o text desejado.|
|Critério do Êxito| O sistema salva o texto escrito com a data de hoje e o apresenta na tela inicial|

|**Caso de Teste**|**CT-03 –Realizar busca por filtro**|
| :-: | :-: |
|Requisito Associado|RF-003 <br> - A aplicação deverá permitir que o usuário faça pesquisa utilizando filtro de data por mês.|
|Objetivo do Teste|Verificar se o usuário consegue filtrar registros de texto por determinada data.|
|Passos|<br>-Acessar o navegador.<br>-Informar ao navegador à URL da aplicação.<br>-Informar dados de login.<p>-Selecionar o botão ENTRAR para efetuar o login.<br>-Selecionnar o botão "FILTRAR".<br>-Sistema apresenta os meses disponíveis.<br>-Selecionar determinado mês.|
|Critério do Êxito| O sistema exibe entradas da data determinada pelo usuário|

|**Caso de Teste**|**CT-04 –Realizar busca por palavra**|
| :-: | :-: |
|Requisito Associado|RF-004 <br> - A aplicação deverá permitir que o usuário faça pesquisa utilizando filtro de texto.|
|Objetivo do Teste|Verificar se o usuário consegue filtrar registros por texto.|
|Passos|<br>-Acessar o navegador.<br>-Informar ao navegador à URL da aplicação.<br>-Informar dados de login.<br>-Selecionar o botão ENTRAR para efetuar o login.<br>-Selecionnar o botão "BUSCAR".<br>-Sistema habilita um campo de texto.<br>-Informar determinada palavra.|
|Critério do Êxito| O sistema exibe entradas com a palavra determinada pelo usuário|

|**Caso de Teste**|**CT-05 –Criar conta**|
| :-: | :-: |
|Requisito Associado|RF-005 <br>- A aplicação deverá permitir que o usuário crie uma conta.|
|Objetivo do Teste|Verificar se o usuário consegue criar uma conta.|
|Passos|<br>-Acessar o navegador.<p>-Informar ao navegador à URL da aplicação.<p>-Selecionar o link "CRIAR CONTA".<br>-Preencher os campos obrigatórios.<br>- Acionar o botão "CADASTRAR".|
|Critério do Êxito| Sistema exibe mensagem de sucesso e retorna à tela de login|
