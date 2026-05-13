<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getCategory, getSubjectsByCategory } from '../../content'

const route = useRoute()
const category = computed(() => getCategory(String(route.params.category)))
const categorySubjects = computed(() => getSubjectsByCategory(String(route.params.category)))
</script>

<template>
  <section v-if="category" class="content-section">
    <div class="section-heading">
      <span class="card-label">Categoria</span>
      <h1>{{ category.title }}</h1>
      <p>{{ category.description }}</p>
    </div>

    <div v-if="categorySubjects.length" class="grid-section compact">
      <RouterLink v-for="subject in categorySubjects" :key="subject.slug" class="card" :to="`/escola/${subject.slug}`">
        <span class="card-label">{{ subject.period }}</span>
        <h2>{{ subject.title }}</h2>
        <p>{{ subject.description }}</p>
      </RouterLink>
    </div>

    <p v-else class="empty-state">Nenhuma disciplina ou post cadastrado nesta categoria ainda.</p>
  </section>
</template>
