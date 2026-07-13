# BrainDump Docs

Esta pasta concentra os contratos usados para evoluir o projeto sem depender de conhecimento implícito.

## Como usar

- Antes de implementar uma mudança, crie ou atualize uma especificação em `docs/specs/`.
- Para criar conteúdo acadêmico, siga `docs/content/college-content-guidelines.md`.
- Para montar apresentações HTML autocontidas, siga `docs/content/html-slide-deck-standard.md`.
- Para entender a organização atual do projeto, consulte `docs/project-structure.md`.

## Ordem recomendada

1. Definir a especificação.
2. Validar escopo, rotas, conteúdo afetado e critérios de aceite.
3. Implementar somente o que a especificação cobre.
4. Rodar `npm run typecheck` ou `npm run build`, conforme o risco da mudança.
5. Atualizar a especificação com decisões tomadas durante a implementação.
