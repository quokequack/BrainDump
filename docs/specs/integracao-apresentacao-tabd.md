# Integração da apresentação de TABD

Status: Concluído

## Objetivo

Disponibilizar a apresentação existente “One Piece × V-Dem” na matéria Tópicos Avançados em Banco de Dados (TABD), do 5º período.

## Contexto

O arquivo `src/views/college/5p/tabd/apresentacao-tabd.html` já contém os slides e suas interações. O catálogo em `src/content.ts` determina a listagem e as rotas da aplicação.

## Escopo

- Importar o HTML com `?raw` e cadastrar a apresentação nos posts de TABD.
- Preservar o conteúdo e o mecanismo de slides fornecidos.

## Arquivos afetados

- `src/content.ts`
- `docs/specs/integracao-apresentacao-tabd.md`

## Contrato de conteúdo ou comportamento

- Matéria: `tabd`, categoria `escola`, período `5o periodo`.
- Rota: `/escola/tabd/apresentacao-tabd`.
- Título: “One Piece × V-Dem — Apresentação TABD”.
- Fonte: HTML existente fornecido no repositório, renderizado no iframe atual.

## Critérios de aceite

- A página de TABD lista a apresentação junto à revisão existente.
- A rota abre o HTML correto e permite navegar pelos slides.
- `npm run typecheck` passa.

## Validação

- `npm run typecheck`: passou.
- Navegador: listagem de TABD, abertura da apresentação e recarga direta da rota validadas.
- Navegação entre os 18 slides por teclado e gesto de toque validada; primeiro e último slides conferidos.
- Desktop de 1440 px e celular de 390 px: apresentação ajustada ao iframe e aplicação sem rolagem horizontal.
- Sem erros de JavaScript. Captura de tela: `/private/tmp/braindump-apresentacao-tabd-desktop.png`.

## Decisões

- Registrar o arquivo existente sem reescrever os slides ou alterar a estrutura da aplicação.
