# Padrão de Apresentações HTML

Use este padrão para posts acadêmicos em formato de slides autocontidos.

## Contrato técnico

Cada apresentação deve:

- ser um documento HTML completo com `<!DOCTYPE html>` e `<html lang="pt-BR">`;
- incluir `<meta name="viewport" content="width=device-width, initial-scale=1.0">`;
- incluir `<meta name="slides-format" content="viewport">`;
- funcionar dentro do iframe usado pela aplicação;
- não depender de APIs do documento pai;
- manter scripts e estilos no próprio HTML, exceto fontes ou bibliotecas CDN já aceitas pelo padrão existente.

## Estrutura de slides

Use as classes:

- `.deck` para o contêiner geral;
- `.slide` para cada tela;
- `.slide.active` para o slide visível;
- `.content` para limitar e organizar o conteúdo;
- `.reveal` para elementos animados na entrada.

Cada apresentação deve ter:

- slide inicial com título e contexto;
- slides intermediários organizados por conceito;
- slide final de síntese, conclusão ou referências;
- controles de anterior/próximo;
- indicadores de slide;
- contador de posição.

## Interação

Obrigatório:

- botões de navegação;
- setas esquerda/direita;
- espaço para avançar;
- gesto horizontal em toque;
- estado visual do slide ativo.

## Responsividade e acessibilidade

- Adaptar grid para uma coluna em telas estreitas.
- Permitir rolagem vertical em telas baixas.
- Evitar texto cortado dentro de cards, botões e tabelas.
- Usar contraste suficiente entre texto e fundo.
- Respeitar `prefers-reduced-motion`.
- Não usar texto essencial apenas em imagem.

## Visual

- O layout pode variar por matéria, mas deve manter navegação previsível.
- Use paleta coerente com o assunto sem repetir cegamente apresentações antigas.
- Evite depender de hover para revelar conteúdo essencial.
- Evite excesso de elementos decorativos quando competirem com o conteúdo.

## Validação manual

Antes de concluir:

- testar primeiro, último e slides intermediários;
- navegar por botão, teclado e toque quando possível;
- conferir desktop e largura mobile;
- verificar console do navegador se houver scripts novos;
- confirmar que a rota da aplicação carrega o HTML.
