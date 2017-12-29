# AutomationPracticeQA

Projeto de automação de testes - Qualidade de Software - TASIMA - [![CircleCI](https://circleci.com/gh/tasima-uniritter/AutomationPracticeQA.svg?style=svg)](https://circleci.com/gh/tasima-uniritter/AutomationPracticeQA)

## Projeto

* [AutomationPractice](http://automationpractice.com/index.php)

## Integrantes

* Alex
* Gelson
* Lucas Gentile
* Tiago

## Informações Gerais
Os testes foram feitos tanto no selenium quanto no protractor.

Integração contínua no circleci ativa.
Builds podem ser verificadas em:
https://circleci.com/gh/tasima-uniritter/AutomationPracticeQA


## Requisitos:
* [NodeJS](https://https://www.notejs.org).
* [Protractor](https://http://www.protractortest.org).

Após instalar o nodejs siga os passos abaixo para instalar o protractor, atualizar e executar o webdriver:

npm install -g protractor

webdriver-manager update

webdriver-manager start

Em outro terminal execute os testes automatizados execute na raiz do projeto AutomationPracticeQA:

protractor config.js

## Critérios de Aceitação

### 1 - Carrinho de Compras

#### A.
```
    Dado que eu quero adicionar um item ao carrinho de compras
    Quando eu clicar em “Add to cart” de um item e depois confirmar em “Proceed to checkout”
    Então o item deve ser adicionado na lista de produtos do carrinho de compras
```

#### B.
```
    Dado que eu quero remover um item do carrinho de compras
    Quando eu clicar em no botão do carrinho e a lista tiver apenas um produto, depois que clicar no botão de remover de um item da lista
    Então o item selecionado deve ser removido da lista e deve aparecer a mensagem: “Your shopping cart is empty. “
```

#### C.
```    
    Dado que eu quero remover um item do carrinho de compras
    Quando eu clicar em no botão do carrinho e a lista tiver mais de um  produto, depois que clicar no botão de remover de um item da lista
    Então o item selecionado deve ser removido da lista e os campos de totalização: Total products, Total shipping, Total, Tax e TOTAL devem ser ajustados
```

#### D.
```	 
    Dado que eu quero visualizar um produto e adicionar ao carrinho
    Quando eu clicar na imagem do produto, informar todos dados do item após clicar “Add to cart” e depois na pop-up clicar em “Proceed to checkout”
    Então O item deve ser adicionado no carrinho de compras
```

#### E.
```
    Dado que eu quero visualizar um produto e adicionar ao carrinho
    Quando eu clicar na imagem do produto, informar todos dados do item após clicar “Add to cart” e depois na pop-up clicar em “Proceed to checkout”
    Então O item deve ser adicionado no carrinho de compras
```

#### F.

``` 
```

#### G.

``` 
```

### 2 - Contact Us

#### A.
```
    Dado que eu quero acessar a página para contatar o administrador
    Quando eu clicar no menu "Contact us" na página principal
    Então a página com o título "Customer service - Contact us" deverá ser exibida.
```
#### B.
```
    Dado que eu quero enviar uma mensagem para o administrador
    Quando eu tentar enviar uma mensagem com o campo "Message" em branco
    Então a mensagem de erro "The message cannot be blank." deverá ser exibida.
```
#### C.
```
    Dado que eu quero enviar uma mensagem para o administrador
    Quando eu tentar enviar uma mensagem com o campo "Subject Heading" em branco
    Então a mensagem de erro "Please select a subject from the list provided." deverá ser exibida.
```
#### D.
```
    Dado que eu quero enviar uma mensagem para o administrador sobre o assunto "Customer service"
    Quando eu selecionar a opção "Customer service" no campo "Subject Heading"
    Então a informação "For any question about a product, an order" deverá ser exibida logo abaixo do campo.
```
#### E.
```
    Dado que eu quero enviar uma mensagem para o administrador sobre o assunto "Webmaster"
    Quando eu selecionar a opção "Webmaster" no campo "Subject Heading"
    Então a informação "If a technical problem occurs on this website" deverá ser exibida logo abaixo do campo.
```
#### F.
```
    Dado que eu quero enviar uma mensagem para o administrador
    Quando eu tentar enviar uma mensagem com um e mail inválido no campo "Email address"
    Então a mensagem de erro "Invalid email address." deverá ser exibida.
```
#### G.
```
    Dado que eu quero enviar uma mensagem para o administrador
    Quando eu preencher todos os campos corretamente
    Então quando eu clicar no botão "Send", a mensagem de sucesso "Your message has been successfully sent to our team." deverá ser exibida.
```

### 3 - Novo cadastro

#### A.
```
    Dado que não possuo um cadastro no site
    Quando eu clicar "Login", dígito um e-mail válido e dígito informações de cadastro válidas
    Então ocorrer o cadastro com sucesso e aparecer a tela da conta do usuário
```

#### B.
```
    Dado que eu não possuo um cadastro no site
    Quando eu clicar "Login" e coloco um e-mail inválido
    Então devo receber a infomação de email inválido 
```
