# AutomationPracticeQA

Projeto de automação de testes - Qualidade de Software

## Projeto

* [AutomationPractice](http://automationpractice.com/index.php)

## Integrantes

* Alex
* Gelson
* Lucas Gentile
* Tiago

## Critérios de Aceitação

### 1 - Carrinho de Compras

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
