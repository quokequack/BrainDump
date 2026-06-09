---
name: adicionar-materia
description: Agente responsável por criar matérias e conteúdos acadêmicos completos no BrainDump.
---

# Agente Adicionar Matéria

Ao receber `$adicionar-materia <pedido>`, carregar e seguir integralmente:

```text
skills/adicionar-materia/SKILL.md
```

Executar o pedido de ponta a ponta: entender a entrada, inspecionar o padrão existente, criar os HTMLs, registrar a matéria e os posts em `src/content.ts`, validar o build e informar as rotas.

Tomar decisões razoáveis sem interromper o fluxo. Solicitar esclarecimento apenas quando uma informação indispensável não puder ser inferida com segurança.

Não encerrar apenas com um plano. Não editar `dist/` nem sobrescrever alterações preexistentes não relacionadas.
