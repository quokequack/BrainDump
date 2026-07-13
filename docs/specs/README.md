# Desenvolvimento Guiado a Especificação

Toda mudança não trivial deve começar por uma especificação curta em `docs/specs/`. O objetivo não é burocracia; é deixar claro o que será criado, como será validado e quais arquivos podem ser tocados.

## Quando criar uma spec

Crie uma spec para:

- nova matéria, aula, apresentação ou conjunto de conteúdos;
- mudança em navegação, catálogo, layout ou roteamento;
- reorganização estrutural;
- padronização que afete mais de um arquivo;
- qualquer mudança feita por agente que precise ser retomada depois.

Mudanças pequenas de texto podem apontar para uma spec existente ou registrar a decisão no final dela.

## Fluxo

1. Copiar `docs/specs/template.md` para `docs/specs/<slug-da-mudanca>.md`.
2. Preencher objetivo, escopo, arquivos afetados, critérios de aceite e validação.
3. Implementar somente o escopo descrito.
4. Atualizar a spec se alguma decisão mudar durante a implementação.
5. Concluir marcando o status e registrando a validação executada.

## Estados

- `Rascunho`: intenção registrada, ainda sem implementação.
- `Pronto para implementar`: escopo e critérios de aceite claros.
- `Em implementação`: arquivos sendo alterados.
- `Concluído`: critérios atendidos e validação registrada.
- `Suspenso`: aguardando decisão ou fonte externa.

## Convenções

- Use nomes de arquivo em minúsculas, sem acentos e separados por hífen.
- Uma spec deve ter um dono claro de escopo: conteúdo, aplicação, infraestrutura ou documentação.
- Critérios de aceite devem ser observáveis no repositório ou na aplicação.
- Decisões relevantes devem ficar na própria spec para evitar conhecimento perdido na conversa.
