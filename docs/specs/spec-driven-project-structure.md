# Reorganização para Desenvolvimento Guiado a Especificação

Status: Concluído

## Objetivo

Organizar o repositório para que mudanças futuras sejam guiadas por especificações curtas e para que a criação de conteúdo acadêmico siga diretrizes explícitas e reutilizáveis.

## Contexto

O projeto já possuía uma skill para adicionar matérias, mas parte do padrão de conteúdo ficava dentro da própria skill. A mudança separa documentação de produto, contrato técnico e diretrizes de criação para que agentes e humanos usem a mesma fonte.

## Escopo

Inclui:

- Criar documentação canônica em `docs/`.
- Definir fluxo de specs em `docs/specs/`.
- Separar diretrizes de conteúdo acadêmico e padrão de slides HTML.
- Atualizar `AGENTS.md`, `agents/adicionar-materia.md` e `skills/adicionar-materia/SKILL.md`.
- Manter compatibilidade com a referência antiga da skill.

Não inclui:

- Renomear arquivos acadêmicos antigos fora do padrão.
- Alterar rotas, componentes Vue ou catálogo de conteúdo.
- Editar arquivos gerados em `dist/`.

## Arquivos afetados

- `AGENTS.md`
- `agents/adicionar-materia.md`
- `skills/adicionar-materia/SKILL.md`
- `skills/adicionar-materia/references/padrao-banco-de-dados.md`
- `docs/README.md`
- `docs/project-structure.md`
- `docs/specs/README.md`
- `docs/specs/template.md`
- `docs/content/college-content-guidelines.md`
- `docs/content/html-slide-deck-standard.md`

## Contrato de conteúdo ou comportamento

Novas mudanças não triviais devem criar ou atualizar uma spec em `docs/specs/`. Novos conteúdos acadêmicos devem seguir as diretrizes em `docs/content/` e continuar sendo registrados em `src/content.ts`.

## Critérios de aceite

- O projeto tem um local explícito para specs.
- As diretrizes de conteúdo estão separadas das instruções do agente.
- O comando `$adicionar-materia` aponta para as diretrizes canônicas.
- Nenhum arquivo de `dist/` foi editado manualmente.
- `npm run typecheck` passa.

## Validação

Comandos executados:

```bash
npm run typecheck
```

Resultado: passou.

## Decisões

- Arquivos antigos com nomes fora do padrão não foram renomeados para evitar mudança de escopo e conflito com alterações pendentes.
- A referência antiga `skills/adicionar-materia/references/padrao-banco-de-dados.md` foi mantida como ponte de compatibilidade.
