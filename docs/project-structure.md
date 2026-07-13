# Estrutura do Projeto

BrainDump é uma aplicação Vue/Vite que também renderiza páginas HTML estáticas como conteúdo bruto dentro da interface.

## Pastas principais

- `src/main.ts`: entrada da aplicação Vue.
- `src/App.vue`: shell visual da aplicação.
- `src/router.ts`: definição das rotas principais.
- `src/content.ts`: catálogo navegável de categorias, matérias e posts.
- `src/views/app/`: views Vue usadas pelo roteador.
- `src/views/college/`: conteúdos acadêmicos agrupados por período e matéria.
- `public/`: arquivos estáticos servidos diretamente.
- `docs/`: especificações, padrões e diretrizes do projeto.
- `agents/`: instruções de agentes acionados por comandos do repositório.
- `skills/`: skills locais usadas pelos agentes.
- `dist/`: saída gerada pelo build; não editar manualmente.

## Taxonomia de conteúdo acadêmico

Use este formato para novos conteúdos:

```text
src/views/college/<periodo>/<materia>/<post>.html
```

Exemplo:

```text
src/views/college/4p/banco-de-dados/backup-recovery-oracle.html
```

Regras:

- `<periodo>` usa o padrão curto já existente, como `4p`.
- `<materia>` e `<post>` usam slugs em minúsculas, sem acentos e separados por hífen.
- Exceções antigas podem existir, mas não devem ser copiadas para novos arquivos.
- Assets específicos de um conteúdo ficam dentro da pasta do próprio conteúdo quando forem acoplados a ele.

## Catálogo

Todo conteúdo navegável precisa estar registrado em `src/content.ts`.

- Importe HTML com `?raw`.
- Importe assets usados dentro de HTML com `?url` quando a página depender de caminhos relativos.
- Registre a matéria em `subjects`.
- Registre cada conteúdo em `posts`.
- Não altere `src/router.ts` para novas matérias ou posts; as rotas são derivadas dos slugs do catálogo.
