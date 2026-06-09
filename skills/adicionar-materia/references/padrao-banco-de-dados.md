# Padrão de Banco de Dados

## Contrato de conteúdo

`src/content.ts` é o catálogo que torna as matérias navegáveis.

- Cada HTML é importado com `?raw`.
- Cada matéria é um item de `subjects`.
- Cada post referencia o HTML importado.
- As rotas são derivadas dos slugs; não é necessário alterar `src/router.ts`.

Exemplo estrutural:

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

## Organização

Usar `src/views/college/<periodo>/<materia>/<post>.html`, como:

```text
src/views/college/4p/banco-de-dados/backup-recovery-oracle.html
```

## Padrão dos HTMLs

Usar os arquivos de `src/views/college/4p/banco-de-dados/` como referência visual e funcional, sem copiá-los cegamente.

Cada conteúdo deve:

- ser um documento HTML completo em `pt-BR`;
- usar slides de viewport com `.deck`, `.slide`, `.slide.active` e `.content`;
- ter primeiro slide de título, slides de conteúdo e slide final de síntese;
- incluir controles anterior/próximo, indicadores e contador;
- responder a setas, espaço e gesto horizontal;
- animar elementos `.reveal`;
- possuir estilos responsivos para telas estreitas e baixas;
- respeitar `prefers-reduced-motion`;
- manter contraste e texto legível.

O número de slides deve acompanhar a quantidade de conteúdo. Priorizar explicação clara e correta em vez de preencher uma quantidade fixa.

## Validação

Antes de concluir:

```bash
rg "<slug-da-materia>|<slug-do-post>" src/content.ts
npm run typecheck
```

Confirmar também que os arquivos importados existem e que nenhum arquivo de `dist/` foi editado manualmente.
