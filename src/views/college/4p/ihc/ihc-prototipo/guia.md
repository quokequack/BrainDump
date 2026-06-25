# Guia de Direcao para Slides HTML

Este documento deve ser usado como briefing para um agente de IA gerar uma apresentacao em HTML, CSS e JavaScript sobre o prototipo de IHC. O agente deve transformar o conteudo abaixo em slides visuais, coerentes e prontos para apresentacao, respeitando a identidade visual definida neste arquivo.

## Objetivo da apresentacao

Apresentar o processo de construcao e validacao do prototipo, retomando personas e cenarios, explicando as decisoes de design e finalizando com a demonstracao do prototipo no Figma.

O tom deve ser academico, claro e objetivo, mas com apresentacao visual moderna. A narrativa deve mostrar que o prototipo foi construido com base em perfis de usuarios, validado por analises de IHC e refinado por decisoes visuais consistentes.

## Papel do agente de IA

Ao gerar os slides, o agente deve:

- Criar uma apresentacao em HTML com visual consistente do inicio ao fim.
- Usar as cores e tipografias indicadas neste guia.
- Organizar o conteudo em uma sequencia narrativa, nao apenas em blocos soltos.
- Transformar textos longos em mensagens curtas, com hierarquia visual clara.
- Extrair as informacoes das imagens de personas e cenarios, em vez de apenas colar as fotos no HTML.
- Incorporar as imagens de evidencias da avaliacao de forma organizada, com legenda e contexto.
- Preparar os slides para apresentacao oral, evitando excesso de texto.
- Criar layouts que funcionem bem em tela 16:9.
- Manter contraste suficiente entre texto e fundo.

## Identidade visual

### Tipografia

Use as duas familias abaixo:

- **Plus Jakarta Sans**: titulos, chamadas principais, numeros de destaque e textos de impacto.
- **Inter**: corpo de texto, legendas, listas, notas e informacoes secundarias.

Regras de uso:

- Titulos devem ter peso alto, preferencialmente `700` ou `800`.
- Corpo de texto deve usar peso `400`, `500` ou `600`.
- Evite paragrafo longo em slide. Prefira frases curtas e blocos escaneaveis.
- Use hierarquia tipografica clara: titulo grande, subtitulo medio, apoio menor.

### Paleta de cores

Use a paleta abaixo como fonte principal de cores da apresentacao.

#### Primarias

- **Roxo profundo:** `#3B30C4`
- **Roxo vibrante:** `#5B4BF5`
- **Amarelo destaque:** `#F5A623`
- **Lavanda clara:** `#EDE9FE`

#### Secundarias

- **Verde sucesso:** `#16A34A`
- **Laranja alerta:** `#EA580C`
- **Vermelho criticidade:** `#DC2626`
- **Azul informativo:** `#0284C7`

#### Neutras

- **Branco:** `#FFFFFF`
- **Fundo lavanda:** `#F4F3FF`
- **Borda lavanda:** `#E5E3FF`
- **Cinza medio:** `#9CA3AF`
- **Cinza texto:** `#4B5563`
- **Roxo quase preto:** `#1A1340`

### Aplicacao das cores

- Use `#FFFFFF` e `#F4F3FF` como fundos principais.
- Use `#1A1340` para titulos e textos de maior importancia.
- Use `#4B5563` para texto secundario.
- Use `#3B30C4` e `#5B4BF5` para elementos principais, barras, destaques e navegacao.
- Use `#F5A623` apenas para chamadas de atencao, marcadores ou pontos de enfase.
- Use as cores secundarias com significado:
  - `#16A34A` para validacao, acertos e conclusoes positivas.
  - `#EA580C` para alertas e pontos de atencao.
  - `#DC2626` para problemas, riscos ou falhas encontradas.
  - `#0284C7` para informacoes tecnicas ou explicativas.

Evite criar novas cores fora desta paleta, exceto transparencias derivadas dessas cores.

## Estilo visual esperado

A apresentacao deve parecer um produto academico-polido, nao um documento textual. Use:

- Fundos limpos, com bastante respiro.
- Cards simples com borda suave e raio pequeno ou medio.
- Destaques coloridos para guiar a leitura.
- Diagramas simples para explicar metodologia.
- Blocos visuais para personas, cenarios e validacoes.
- Imagens grandes quando o slide depender delas.

Evite:

- Slides cheios de texto corrido.
- Paleta infantilizada ou excessivamente parecida com Duolingo.
- Gradientes fortes sem necessidade.
- Elementos decorativos que nao comuniquem conteudo.
- Baixo contraste entre texto e fundo.

## Conteudo obrigatorio

### 1. Metodologia de execucao do projeto

Explicar que a equipe dividiu a construcao do prototipo por perfis de usuario.

Mensagem central:

> A construcao do prototipo foi organizada por perfis. Quem nao trabalhou diretamente em um perfil ficou responsavel por analisar aquele fluxo usando percurso cognitivo e heuristicas, garantindo que pelo menos uma tela, tarefa ou funcionalidade de cada perfil fosse validada.

O slide deve deixar claro:

- Houve divisao por perfis.
- Cada perfil teve pelo menos uma parte do prototipo analisada.
- A validacao combinou percurso cognitivo e avaliacoes heuristicas.
- A estrategia reduziu vieses, pois quem avaliou nao foi necessariamente quem construiu.

Sugestao visual:

- Criar um fluxo em 4 etapas:
  1. Definicao dos perfis
  2. Construcao das telas por perfil
  3. Analise por colegas que nao construiram aquele fluxo
  4. Consolidacao dos ajustes no prototipo

### 2. Personas e cenarios

Relembrar as personas e apresentar os cenarios de uso correspondentes.

Arquivos de referencia:

- `personas/02 · Personas.jpg`
- `personas/cenarios.png`

Diretrizes:

- Nao colar as fotos das personas diretamente como o conteudo principal do HTML.
- Usar as imagens como fonte de informacao para montar cards, tabelas ou blocos textuais editaveis.
- Extrair nomes, perfis, dores, objetivos e cenarios da imagem.
- Se quiser usar a imagem original, ela deve aparecer apenas como evidencia visual secundaria ou apendice, nunca como unico conteudo do slide.
- Criar slides legiveis com as informacoes transcritas abaixo.

Mensagem central:

> As personas ajudaram a representar diferentes necessidades, expectativas e limitacoes dos usuarios. Os cenarios conectaram esses perfis a situacoes reais de uso, orientando as decisoes do prototipo.

#### Personas transcritas

Use estes dados para construir os slides de personas:

**Larissa Tenorio**

- Perfil: Estudante - alvo primario.
- Iniciais: LT.
- Caracteristicas: esforcada, sobrecarregada, insegura.
- Contexto: 19 anos, 2o periodo de SI. Primeira da familia no ensino superior, concilia curso, trabalho de meio periodo e longo trajeto.
- Dores:
  - Sente que esta sempre "ficando para tras".
  - Falta as aulas quando o trabalho aperta.
  - Evita pedir ajuda com medo de atrapalhar.
- Objetivos:
  - Perceber que progride, mesmo aos poucos.
  - Ser reconhecida por presenca e entregas.
  - Ter um motivo para nao desistir.

**Mateus Cavalcante**

- Perfil: Estudante - multiplicador.
- Iniciais: MC.
- Caracteristicas: competitivo, comunicativo, antenado.
- Contexto: 21 anos, 4o periodo. Monitor e membro do diretorio. Engajado e popular, leva a turma junto se a plataforma o conquistar.
- Dores:
  - Quer reconhecimento publico pelo desempenho.
  - Busca competir de forma saudavel.
  - Valoriza rankings e estatisticas.
- Objetivos:
  - Liderar rankings individuais e de turma.
  - Fortalecer curriculo e rede de contatos.
  - Reforcar o senso de pertencimento.

**Profa. Adriana Vasconcelos**

- Perfil: Docente.
- Iniciais: AV.
- Caracteristicas: dedicada, observadora, sobrecarregada.
- Contexto: 42 anos, mestre em Computacao, 12 anos no IFAL. Leciona para muitas turmas e controla notas e faltas em planilhas.
- Dores:
  - So percebe a evasao quando o aluno some.
  - Pouco tempo entre aulas e correcoes.
  - Acompanhamento manual e demorado.
- Objetivos:
  - Identificar alunos em risco a tempo.
  - Receber alertas proativos e automaticos.
  - Intervir cedo para apoiar o estudante.

**Roberto Maia**

- Perfil: Gestao.
- Iniciais: RM.
- Caracteristicas: estrategico, analitico, orientado a resultados.
- Contexto: 50 anos, doutor em Educacao, coordenador do curso. Responde a direcao pelos indicadores e decide com base em dados.
- Dores:
  - Falta de visao consolidada das turmas.
  - Precisa justificar e otimizar recursos.
  - Cobrado por resultados de permanencia.
- Objetivos:
  - Painel consolidado da situacao dos alunos.
  - Priorizar acoes com base em dados.
  - Demonstrar resultados de permanencia.

#### Cenarios transcritos

Use estes dados para construir os slides de cenarios:

**Larissa Tenorio - estudante sobrecarregada**

- "Como estudante sobrecarregada, eu quero ver minha evolucao para me motivar a continuar e sentir que estou melhorando."
- "Como estudante sobrecarregada, eu as vezes posso nao me sair muito bem e nao quero me expor aos meus colegas."
- "Como estudante sobrecarregada, eu quero estabelecer metas pessoais para me desafiar."

**Roberto Maia - gestor**

- "Como gestor, eu quero usar o sistema para emitir relatorios sobre evasao para comprovar aumento ou diminuicao semestre a semestre."
- O arquivo repete o mesmo cenario para o perfil de gestao; trate como uma necessidade central de relatorios comparativos sobre evasao.

**Profa. Adriana Vasconcelos - professora**

- "Como professora, eu quero, ao entrar no sistema, ver como vai o desempenho dos alunos que cursam as minhas disciplinas."
- "Como professora, eu quero conseguir intervir de alguma forma caso um aluno esteja em situacao muito critica."

**Mateus Cavalcante - estudante competitivo**

- "Como estudante competitivo, eu quero saber de todos as formas possiveis que posso pontuar para crescer no ranking."
- "Como estudante competitivo, eu quero ver como meus oponentes estao se saindo."
- "Como estudante competitivo, eu quero ver resumos sobre minhas conquistas."

### 3. Decisoes de design

Explicar as escolhas de tipografia e cores usadas no prototipo.

O agente deve apresentar:

- Por que **Plus Jakarta Sans** foi usada para titulos e destaques.
- Por que **Inter** foi usada para textos de apoio e leitura continua.
- Como a paleta roxa cria identidade visual consistente.
- Como amarelo, verde, laranja, vermelho e azul sao usados para status, enfase e feedback.
- Como os tons neutros ajudam a manter legibilidade e organizacao.

Sugestao visual:

- Um slide de tipografia com exemplos reais de titulo, subtitulo e corpo.
- Um slide de paleta com amostras de cor e nomes funcionais.
- Um slide conectando cores a usos praticos na interface.

#### Assets visuais complementares

As imagens abaixo estao na pasta `img` e devem ser usadas de forma organizada e coerente quando combinarem com o conteudo do slide:

- `img/awards 2.png`: icone de premio/conquista. Usar em slides sobre reconhecimento, objetivos do estudante multiplicador ou resumo de conquistas.
- `img/attendance-badge.png`: icone de presenca/check-in. Usar em slides sobre o fluxo do aluno para registrar presenca em aula.
- `img/correct.png`: icone de validacao. Usar em slides sobre fluxos aprovados, conformidade ou achados positivos.
- `img/fire-badge.png`: icone de ofensiva/engajamento. Usar em slides sobre motivacao, continuidade ou evolucao da estudante sobrecarregada.
- `img/medal.png`: icone de medalha/reconhecimento. Usar em slides sobre conquistas, recompensas e reconhecimento publico.
- `img/podio.png`: icone de podio. Usar em slides sobre ranking, comparacao de desempenho ou posicao da turma.
- `img/star.png`: icone de estrela. Usar como pequeno marcador de destaque, recompensa ou ponto-chave.
- `img/streak.png`: icone de chama/ofensiva. Usar em slides sobre constancia, motivacao e permanencia.
- `img/trophy 1.png`: icone de trofeu/ranking. Usar em slides sobre competicao saudavel, ranking ou metas.

Diretrizes:

- Usar esses assets como apoio visual, nunca como substitutos das informacoes principais.
- Posicionar os icones em tamanho controlado, com espacamento adequado.
- Evitar repetir todos os icones em todos os slides.
- Manter o estilo academico-polido da apresentacao.

### 4. Resultados da avaliacao por perfil

Interpretar os resultados das avaliacoes e apresentar apenas o que vai direto para os slides. Nao transformar o relatorio bruto em texto corrido.

#### Percurso cognitivo

Mensagem central:

> O percurso cognitivo indicou que os fluxos principais estavam compreensiveis: as acoes foram percebidas, associadas ao objetivo correto e geraram progresso. Os ajustes encontrados foram pontuais, ligados principalmente a visibilidade.

Resumo por perfil:

- **Gestor - obter dados sobre evasao:** fluxo validado nas etapas de login, acesso a relatorios, filtros e exportacao. Melhorias: aumentar contraste dos filtros de turma e adicionar um botao flutuante de exportar no topo ou durante a rolagem.
- **Aluno - realizar check-in em uma aula:** fluxo validado sem problemas observados. Login, acesso ao icone de presenca, escolha de opcao, codigo da turma e confirmacao foram considerados claros.
- **Professor - obter dados sobre alunos em risco:** fluxo validado sem problemas observados. Login, acesso a "alunos em risco" e aplicacao de filtros foram compreensiveis.

Sugestao visual:

- Criar um slide "Percurso cognitivo: fluxos compreensiveis" com tres cards: Gestor, Aluno e Professor.
- Usar marcador verde para fluxos sem bloqueio e marcador amarelo para pontos de ajuste.
- Destacar os dois ajustes do gestor como oportunidades de melhoria, nao como falhas graves.

#### Avaliacao heuristica

Mensagem central:

> A avaliacao heuristica encontrou problemas de baixa a media severidade. As principais melhorias estao em visibilidade de acoes, reducao de excesso de informacao, liberdade de navegacao e ajuda/documentacao.

Resumo para os slides:

- **Gestor - exportar relatorio sobre evasao**
  - Heuristicas violadas: 6, 8 e 10.
  - Severidade: 1, cosmetico.
  - Problemas: botao "exportar" pouco visivel, muitas informacoes na tela inicial e ausencia de ajuda/tutorial.
  - Melhorias: botao flutuante de exportacao, personalizacao ou simplificacao do dashboard e opcao "Ajuda" no menu lateral.

- **Aluno - enviar atividade complementar**
  - Heuristicas violadas: 3 e 10.
  - Severidade: 2, leve.
  - Problemas: ausencia de botao voltar durante a navegacao e ausencia de ajuda/tutorial.
  - Melhorias: incluir botao de voltar e adicionar secao de ajuda no menu lateral.

- **Professor - intervir em um aluno**
  - Heuristicas violadas: nenhuma.
  - Severidade: 0.
  - Resultado: pagina considerada adequada.

Sugestao visual:

- Criar um slide "Avaliacao heuristica: problemas de baixa severidade".
- Usar uma tabela curta com colunas: Perfil, achado, severidade, melhoria.
- Destacar que nenhuma falha catastrofica foi encontrada.

#### Acessibilidade no Stark para Figma

Mensagem central:

> A avaliacao no Stark mostrou bom desempenho em contraste e areas de toque, mas revelou risco de legibilidade em textos pequenos, especialmente no simulador de visao borrada.

Resumo por tela:

- **Tela inicial do coordenador**
  - Contraste: conformidade AA e AAA.
  - Areas de toque: conformidade AA e AAA.
  - Tipografia: alerta de legibilidade por fonte abaixo de 12px.
  - Simulador de visao: fontes pequenas perdem legibilidade no modo blurred.

- **Tela de ranking do aluno**
  - Contraste: conformidade AA e AAA.
  - Tipografia: em conformidade.
  - Areas de toque: conformidade AA e AAA.
  - Simulador de visao: legivel em todos os modos.

- **Tela de alunos em risco do professor**
  - Contraste: conformidade AA e AAA.
  - Areas de toque: conformidade AA e AAA.
  - Tipografia: alerta de legibilidade por fonte abaixo de 12px.
  - Simulador de visao: fontes pequenas perdem legibilidade no modo blurred.

Conclusao pratica para o slide:

- O prototipo tem base visual acessivel em contraste e toque.
- O principal ajuste recomendado e elevar textos pequenos para pelo menos 12px e revisar informacoes secundarias que ficam ilegiveis em baixa nitidez.
- Telas de dashboard e listas densas precisam de mais cuidado com tamanho de fonte, peso e espacamento.

Imagens de evidencia a incorporar nos slides:

- `img/alerta-tipografia.png`: usar no slide sobre alerta de tipografia. Legenda sugerida: "Stark identificou fonte abaixo de 12px como risco de legibilidade."
- `img/blur-effect.png`: usar no slide da tela inicial do coordenador. Legenda sugerida: "No simulador blurred, metricas secundarias perdem leitura."
- `img/blurr-effect(2).png`: usar no slide de alunos em risco. Legenda sugerida: "Em listas densas, textos pequenos e badges ficam menos legiveis."

Diretrizes para uso dessas imagens:

- As imagens da pasta `img` devem ser incorporadas aos slides de forma organizada e coerente.
- Nao colocar todas as imagens juntas sem explicacao.
- Cada imagem deve ter titulo, legenda e uma conclusao pratica ao lado.
- Usar as imagens como evidencia dos achados, nao como decoracao.
- Manter proporcao original e aplicar `object-fit: contain`.

### 5. Encerramento com prototipo no Figma

Finalizar a apresentacao preparando a transicao para o Figma.

Mensagem central:

> Depois da definicao das personas, da construcao por perfis e da validacao por percurso cognitivo e heuristicas, o prototipo final consolida as principais decisoes de interacao e interface.

O ultimo slide deve funcionar como chamada para demonstracao:

- Titulo direto, por exemplo: "Prototipo no Figma"
- Frase curta preparando a exibicao.
- Botao ou elemento visual com texto como "Abrir prototipo" ou "Ver demonstracao".
- Se houver link do Figma, inserir no botao. Se nao houver, deixar um marcador claro para substituicao: `[INSERIR LINK DO FIGMA]`.

## Estrutura sugerida dos slides

O agente pode ajustar a quantidade, mas deve preservar esta narrativa:

1. **Capa**
   - Tema da apresentacao.
   - Nome do projeto.
   - Disciplina/equipe, se informado em outro arquivo.

2. **Objetivo do prototipo**
   - Explicar brevemente o que sera apresentado.

3. **Como organizamos o trabalho**
   - Divisao por perfis e construcao das telas.

4. **Como validamos**
   - Percurso cognitivo e heuristicas.
   - Enfatizar que avaliadores diferentes analisaram fluxos que nao construiram.

5. **Personas**
   - Nao colar a imagem original como slide principal.
   - Usar os dados transcritos para montar cards de Larissa, Mateus, Adriana e Roberto.

6. **Cenarios de uso**
   - Nao colar a imagem original como slide principal.
   - Usar os cenarios transcritos para mostrar necessidades por perfil.

7. **Das personas ao prototipo**
   - Mostrar como os perfis e cenarios guiaram as telas e tarefas.

8. **Percurso cognitivo**
   - Mostrar que os fluxos de gestor, aluno e professor foram compreensiveis.
   - Destacar ajustes no perfil gestor: contraste dos filtros e botao flutuante de exportacao.

9. **Avaliacao heuristica**
   - Sintetizar os achados: gestor com severidade 1, aluno com severidade 2, professor sem problema.
   - Mostrar melhorias propostas.

10. **Acessibilidade no Stark**
   - Mostrar que contraste e areas de toque passaram.
   - Destacar problema de fonte abaixo de 12px e perda de legibilidade no modo blurred.

11. **Evidencias visuais da avaliacao**
   - Incorporar `img/alerta-tipografia.png`, `img/blur-effect.png` e `img/blurr-effect(2).png`.
   - Cada evidencia deve ter legenda e recomendacao pratica.

12. **Assets de gamificacao aplicados**
   - Usar `img/awards 2.png`, `img/attendance-badge.png`, `img/correct.png`, `img/fire-badge.png`, `img/medal.png`, `img/podio.png`, `img/star.png`, `img/streak.png` e `img/trophy 1.png` como apoio visual para conquistas, presenca, validacao, engajamento, reconhecimento, destaque, constancia e ranking.
   - Conectar os icones aos objetivos das personas, especialmente Larissa e Mateus, e ao fluxo de check-in do aluno.

13. **Decisoes de tipografia**
   - Plus Jakarta Sans e Inter.

14. **Decisoes de cor**
   - Paleta e significados.

15. **Sistema visual aplicado**
    - Exemplo de como tipografia, cores e componentes se combinam.
    - Reforcar que textos pequenos devem respeitar tamanho minimo de 12px.

16. **Preparacao para a demo**
    - Sintese do processo e transicao para o Figma.

17. **Prototipo no Figma**
    - Chamada final para abrir ou demonstrar o prototipo.

## Regras de layout para HTML

- Usar proporcao de palco 16:9, preferencialmente `1280x720`.
- Centralizar o conteudo dentro do palco.
- Manter margens generosas, evitando conteudo colado nas bordas.
- Usar grid ou flexbox para layouts.
- Criar componentes reutilizaveis para:
  - Slide base
  - Titulo e subtitulo
  - Cards
  - Marcadores de etapa
  - Amostras de cor
  - Blocos de imagem
- Garantir que imagens usem `object-fit: contain` quando precisarem aparecer inteiras.
- Garantir que imagens usem `alt` descritivo.
- Incluir navegacao simples por teclado, se houver JavaScript.

## Regras de texto

- Cada slide deve ter uma ideia principal.
- Titulos devem ser curtos e informativos.
- Evite frases genericas como "Introducao" sem contexto.
- Prefira verbos de acao e nomes concretos.
- Textos devem apoiar a fala, nao substitui-la.

Exemplos de bons titulos:

- "Construcao orientada por perfis"
- "Validacao cruzada dos fluxos"
- "Personas como ponto de partida"
- "Cenarios conectam perfil e tarefa"
- "Tipografia para hierarquia e leitura"
- "Cores com funcao na interface"
- "Do processo ao prototipo"

## Criterios de aceite

A apresentacao gerada sera considerada adequada se:

- Usar Plus Jakarta Sans e Inter.
- Respeitar a paleta definida neste guia.
- Explicar metodologia, personas, cenarios, decisoes de design e transicao para o Figma.
- Usar as informacoes transcritas de `personas/02 · Personas.jpg` e `personas/cenarios.png`, sem depender de colar as fotos no HTML.
- Incorporar as evidencias `img/alerta-tipografia.png`, `img/blur-effect.png` e `img/blurr-effect(2).png` nos slides de avaliacao.
- Incorporar os assets `img/awards 2.png`, `img/attendance-badge.png`, `img/correct.png`, `img/fire-badge.png`, `img/medal.png`, `img/podio.png`, `img/star.png`, `img/streak.png` e `img/trophy 1.png` quando fizerem sentido para conquista, presenca, validacao, engajamento, reconhecimento, destaque, constancia e ranking.
- Tiver narrativa clara e sequencial.
- Evitar excesso de texto por slide.
- Apresentar boa legibilidade em tela 16:9.
- Permitir que outro agente ou pessoa entenda rapidamente como gerar ou ajustar os slides.
