# node-socket-io-chat

Chat simples feito em nodeJS, desenvolvido seguindo o [exemplo](https://socket.io/get-started/chat/) do próprio site do socket.io, para fins de estudos aleatórios.

## Setup:
- Clone o projeto
- Acesse a pasta chat
  -  `cd chat/`
- Instale as dependências
  - `npm install`
- Execute
  - `node inde.js`
- Acessar:
  - `localhost:3000`

## TODO:
- [x] Adicionar aviso de usuário conectado / desconectado
- [x] Adicionar suporte a nicknames
- [ ] Adicionar funcionalidade para exibir "{user} está digitando"
- [ ] Mostrar quem está online
- [ ] Não enviar a mensagem do próprio usuário para ele mesmo, inserir a mensagem no chat com `append` ao invés disso.
