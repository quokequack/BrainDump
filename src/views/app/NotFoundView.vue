<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="content-section">
    <span class="card-label">404</span>
    <h1>Pagina nao encontrada</h1>
    <p>A rota solicitada nao existe neste miniblog.</p>
    <RouterLink class="text-link" to="/">Voltar para o inicio</RouterLink>
  </section>
</template>
