<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { categories } from './content'
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/">BrainDump da Honeycock</RouterLink>
      <nav class="nav-links" aria-label="Categorias">
        <RouterLink v-for="category in categories" :key="category.slug" :to="`/${category.slug}`">
          {{ category.title }}
        </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
