# GitHub Repository Keeper

Aplicação React para buscar repositórios públicos no GitHub e exibi-los em uma lista. É uma versão evoluída do [desafio original da DIO](https://github.com/digitalinnovationone/trilha-react-desafio-2).

## Funcionalidades

- Busca repositórios pela API pública do GitHub usando o formato `usuario/repositorio`.
- Exibe o avatar e o nome do proprietário, o nome e a descrição do repositório.
- Permite abrir a página do repositório no GitHub.
- Permite remover um repositório da lista exibida.
- Evita adicionar novamente um repositório que já esteja na lista.

## Correção do botão de remoção

No projeto original, a função de remoção apenas registrava o identificador no console. Nesta versão, ela atualiza o estado da aplicação filtrando o repositório selecionado pelo seu ID. O componente do repositório encaminha esse ID ao clicar em **Remover**, e o item deixa de ser exibido.

A remoção afeta apenas a lista local da aplicação: ela não exclui o repositório do GitHub. Como a lista não é persistida em um banco de dados, os itens adicionados são perdidos ao recarregar a página.

## Comparação com o projeto original

- **Ferramentas:** o projeto original usa Create React App; esta versão usa Vite e o plugin React.
- **Estilos:** os estilos originalmente definidos com `styled-components` foram reorganizados em arquivos CSS.
- **Cartões de repositório:** a apresentação foi ampliada com avatar, nome do proprietário, descrição e botões para visualizar e remover.
- **Busca:** a consulta à API do GitHub, a inclusão de resultados e a verificação de duplicidade foram mantidas.

## Tecnologias

- React
- Vite
- Axios
- API REST do GitHub
- CSS

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível no endereço informado pelo Vite, normalmente `http://localhost:5173`.

## Build de produção

Gere os arquivos de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```
