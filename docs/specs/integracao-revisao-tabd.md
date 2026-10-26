# Integração da revisão de TABD

Status: Concluído

## Objetivo

Disponibilizar o HTML existente em `src/views/college/5p/tabd/` na seção Escola, com leitura responsiva e simulado funcional.

## Contexto

A aplicação deriva as rotas de matérias e posts do catálogo em `src/content.ts` e renderiza documentos HTML em iframe. A revisão já contém estilos responsivos e JavaScript autocontido.

## Escopo

- Registrar Tópicos Avançados em Banco de Dados (TABD), do 5º período, em Escola.
- Importar o HTML existente com `?raw` e cadastrar o post de revisão.
- Adaptar os links do índice para navegar no próprio documento dentro do iframe.
- Validar navegação, leitura em desktop e celular e funcionamento do simulado; ajustar somente a responsividade necessária.

Não inclui reescrita do conteúdo acadêmico nem alterações nas demais matérias.

## Arquivos afetados

- `src/content.ts`
- `src/views/college/5p/tabd/revisao_topicos_avancados_bd.html`
- `docs/specs/integracao-revisao-tabd.md`

## Contrato de conteúdo ou comportamento

- Matéria: `tabd`, categoria `escola`, período `5o periodo`.
- Rota da matéria: `/escola/tabd`.
- Rota da revisão: `/escola/tabd/revisao-topicos-avancados-bd`.
- Fonte: HTML de revisão já fornecido no repositório, mantendo o nome e a pasta existentes.
- Reutilizar o leitor atual com iframe, navegação interna e simulado de 20 questões.

## Critérios de aceite

- Escola lista a matéria do 5º período e a matéria lista a revisão.
- A rota da revisão renderiza o HTML correto e executa o simulado.
- O documento e a interface não apresentam rolagem horizontal em telas estreitas; tabelas e código podem rolar dentro de seus contêineres.
- A verificação de tipos passa.

## Validação

- `npm run typecheck`: passou.
- `npm run build -- --outDir /private/tmp/braindump-tabd-dist`: passou; saída temporária para preservar `dist/`. O Vite mantém o aviso sobre tamanho do bundle do catálogo.
- Navegador: fluxo Escola → TABD → revisão e acesso direto à rota validados.
- Larguras de 320, 375, 390, 768, 820, 1024 e 1440 px: sem transbordamento horizontal na aplicação ou no iframe.
- Índice, respostas corretas e incorretas, navegação entre questões, resultado das 20 questões e reinício do simulado validados, sem erros de JavaScript.

## Decisões

- Preservar `5p/tabd` e o nome do HTML existente, usando slugs com hífen no catálogo.
- Manter a apostila como documento de leitura contínua, sem convertê-la em slides.
- Os fragmentos de links em `srcdoc` usam a URL base do site. Interceptar somente os atalhos do índice e rolar até a seção dentro do HTML, mantendo o documento autocontido.
