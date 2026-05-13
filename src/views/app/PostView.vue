<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getPost, getSubject } from '../../content'

const route = useRoute()
const subjectSlug = computed(() => String(route.params.subject))
const subject = computed(() => getSubject(subjectSlug.value))
const post = computed(() => getPost(subjectSlug.value, String(route.params.post)))
</script>

<template>
  <article v-if="subject && post" class="reader">
    <div class="reader-header">
      <RouterLink class="text-link" :to="`/escola/${subject.slug}`">Voltar para {{ subject.title }}</RouterLink>
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </div>
    <iframe class="post-frame" :title="post.title" :srcdoc="post.html" sandbox="allow-scripts"></iframe>
  </article>

  <section v-else class="content-section">
    <h1>Post nao encontrado</h1>
    <RouterLink class="text-link" to="/escola">Voltar para escola</RouterLink>
  </section>
</template>
