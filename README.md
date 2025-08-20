# addon-clipping

Faz a captura da página aberta criando um resumo e encurtando a url ( utilizando a API do encurtador.dev®) para montar um clipping de notícias.

<center>
<img src="./commons/clipping.gif" width="400">
</center>

## Guia para instalar a extensão

1. Baixe a última versão do `addon-clipping ` [clicando aqui neste link.](https://github.com/izidorio/addon-clipping/releases/download/v1.3.0/addon-clipping.zip)

2. Descompacte o arquivo `addon-clipping.zip` baixado.

3. Abra o navegador Chrome, na barra de endereço, cole o endereço: `chrome://extensions/` para abrir o gerenciador de extensões do Chrome.

4. Habilite o Modo do desenvolvedor.

5. Carregue a extensão clicando no botão: `Carregar sem compactação` e depois selecione a pasta `addon-clipping` que você descompactou.
<center>
<img src="./commons/01.png" width="400">
</center>

6. A nova versão 1.2.0 utiliza a API do [short.io](https://short.io)

7. Crie uma conta no [short.io](https://short.io) e obtenha a sua chave de API.
   > A chave de API é necessária para encurtar a URL do clipping. insira o domínio da sua conta short.io e a chave de API no campo de configuração da extensão.

## Guia para desenvolvedores

clone o repositório

```bash
git clone git@github.com:izidorio/addon-clipping.git
```

mova-se para o diretório do projeto e instale as dependências

```bash
cd addon-clipping
npm install
```

faça o build do projeto

```
npm run build
```

Abra o gerenciador de extensões do Chrome.

Habilite o Modo do desenvolvedor.

Carregue a extensão clicando no botão: Carregar sem compactação e depois selecione a pasta `/dist`
