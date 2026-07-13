# Diretrizes de Conteúdo Acadêmico

Estas diretrizes definem como criar ou estender matérias em `src/views/college` mantendo o padrão navegável atual.

## Estrutura obrigatória

Cada matéria deve ter:

- pasta em `src/views/college/<periodo>/<slug-da-materia>/`;
- entrada em `subjects` dentro de `src/content.ts`;
- `category: 'escola'`, salvo quando a spec justificar outra categoria;
- `period` no formato exibido pela aplicação, como `4o periodo`;
- descrição curta e útil para listagem;
- posts com `slug`, `title`, `description` e `html`.

Cada post HTML deve:

- ficar na pasta da matéria correspondente;
- usar arquivo em minúsculas, sem acentos e separado por hífen;
- ser importado em `src/content.ts` com `?raw`;
- gerar rota no formato `/<categoria>/<materia>/<post>`.

## Nomes e slugs

- Matérias: `banco-de-dados`, `gestao-de-pessoas-em-ti`, `direito-digital`.
- Posts: `backup-recovery-oracle`, `seguranca-banco-dados`.
- Imports TypeScript: camelCase único, como `backupRecoveryOracle`.
- Títulos visíveis podem usar acentos e capitalização normal.

Arquivos antigos fora do padrão podem permanecer para evitar renames desnecessários, mas novos conteúdos devem seguir o padrão de slugs.

## Registro em `src/content.ts`

Exemplo:

```ts
import nomeDoPost from './views/college/5p/nome-da-materia/nome-do-post.html?raw'

{
  slug: 'nome-da-materia',
  title: 'Nome da Matéria',
  category: 'escola',
  period: '5o periodo',
  description: 'Descrição curta da matéria.',
  posts: [
    {
      slug: 'nome-do-post',
      title: 'Nome do Post',
      description: 'Descrição curta do conteúdo.',
      html: nomeDoPost,
    },
  ],
}
```

## Qualidade editorial

- Priorize explicação clara, correta e escaneável.
- Não invente fatos acadêmicos específicos quando o usuário fornecer fonte.
- Separe conceitos, exemplos e síntese.
- Use termos técnicos de forma consistente dentro da matéria.
- Quando houver comandos ou código, mantenha-os curtos e legíveis.
- Se usar referências externas, registre-as no próprio conteúdo ou na spec.

## Fluxo para adicionar conteúdo

1. Criar ou atualizar uma spec em `docs/specs/`.
2. Verificar se a matéria já existe em `src/content.ts`.
3. Criar a pasta da matéria quando necessário.
4. Criar um HTML por conteúdo solicitado.
5. Atualizar imports e posts em `src/content.ts`.
6. Validar rotas esperadas.
7. Rodar `npm run typecheck`.

## Checklist

- A matéria aparece na categoria correta.
- A página da matéria lista o novo post.
- A rota do post abre o HTML correto.
- Todos os imports apontam para arquivos existentes.
- Nenhum arquivo de `dist/` foi editado manualmente.
