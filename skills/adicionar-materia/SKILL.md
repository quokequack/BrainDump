---
name: adicionar-materia
description: Cria uma nova matéria acadêmica ou adiciona conteúdos a uma matéria existente no BrainDump. Use quando o usuário pedir para adicionar disciplina, matéria, aula, resumo, apresentação ou notas em src/views/college, inclusive por meio do comando $adicionar-materia.
---

# Adicionar matéria

Executar o fluxo completo para deixar a matéria e seus conteúdos navegáveis no BrainDump.

## Entrada

Aceitar uma solicitação curta em linguagem natural. Exemplos:

```text
$adicionar-materia IHC, 4p, com uma aula sobre heurísticas de Nielsen
$adicionar-materia Redes de Computadores no 5p usando estas anotações: ...
$adicionar-materia adicionar o conteúdo "Normalização" em Banco de Dados
```

Inferir título, slug, período, descrição e conteúdo quando estiverem claros. Perguntar somente quando faltar informação indispensável para produzir conteúdo correto. Não inventar fatos acadêmicos específicos quando o usuário fornecer uma fonte.

## Fluxo

1. Ler [references/padrao-banco-de-dados.md](references/padrao-banco-de-dados.md).
2. Inspecionar `src/content.ts`, a pasta do período solicitado e pelo menos um HTML de `src/views/college/4p/banco-de-dados/`.
3. Verificar se a matéria já existe em `subjects`.
4. Criar a pasta `src/views/college/<periodo>/<slug-da-materia>/` quando necessário.
5. Criar um HTML por conteúdo solicitado, seguindo o padrão de apresentação responsiva e interativa.
6. Atualizar `src/content.ts` com imports `?raw`, a nova matéria e/ou os novos posts.
7. Validar com `npm run typecheck`.
8. Relatar os caminhos criados, a rota resultante e a validação executada.

## Regras

- Usar slugs e nomes de arquivos em minúsculas, sem acentos e separados por hífen.
- Usar identificadores camelCase únicos para imports.
- Preservar matérias e posts existentes; não reordenar conteúdo sem necessidade.
- Usar `category: 'escola'` e período no formato exibido pelo projeto, por exemplo `4o periodo`.
- Criar slides autocontidos, legíveis em desktop e mobile, com navegação por botões, teclado e toque.
- Manter o HTML seguro para o iframe com `sandbox="allow-scripts"`: não depender de navegação externa ou APIs do pai.
- Não editar `dist/`.
- Não modificar arquivos não relacionados ou alterações preexistentes do usuário.

## Critérios de conclusão

- A matéria aparece em `/escola`.
- A página da matéria abre em `/escola/<slug-da-materia>`.
- Cada post abre em `/escola/<slug-da-materia>/<slug-do-post>`.
- Todos os imports apontam para arquivos existentes.
- `npm run typecheck` termina com sucesso.
