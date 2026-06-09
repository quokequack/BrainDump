<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getSubject } from '../../content'

const route = useRoute()
const subject = computed(() => getSubject(String(route.params.subject)))
</script>

<template>
  <section v-if="subject" class="content-section">
    <div class="section-heading">
      <span class="card-label">{{ subject.period }}</span>
      <h1>{{ subject.title }}</h1>
      <p>{{ subject.description }}</p>
    </div>

    <div class="list">
      <RouterLink v-for="post in subject.posts" :key="post.slug" class="list-item" :to="`/escola/${subject.slug}/${post.slug}`">
        <strong>{{ post.title }}</strong>
        <span>{{ post.description }}</span>
      </RouterLink>
      <p v-if="subject.posts.length === 0" class="empty-state">Nenhum conteudo adicionado ainda.</p>
    </div>
  </section>

  <section v-else class="content-section">
    <h1>Disciplina nao encontrada</h1>
    <RouterLink class="text-link" to="/escola">Voltar para escola</RouterLink>
  </section>
</template>
