<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getPost, getSubject } from '../../content'

const route = useRoute()
const subjectSlug = computed(() => String(route.params.subject))
const subject = computed(() => getSubject(subjectSlug.value))
const post = computed(() => getPost(subjectSlug.value, String(route.params.post)))
const slideContainer = ref<HTMLElement | null>(null)
const isFullscreen = ref(false)

function syncFullscreenState() {
  isFullscreen.value = document.fullscreenElement === slideContainer.value
}

async function toggleFullscreen() {
  if (!slideContainer.value) return

  if (document.fullscreenElement) {
    await document.exitFullscreen()
    return
  }

  await slideContainer.value.requestFullscreen()
}

onMounted(() => document.addEventListener('fullscreenchange', syncFullscreenState))
onBeforeUnmount(() => document.removeEventListener('fullscreenchange', syncFullscreenState))
</script>

<template>
  <article v-if="subject && post" class="reader">
    <div class="reader-header">
      <RouterLink class="text-link" :to="`/escola/${subject.slug}`">Voltar para {{ subject.title }}</RouterLink>
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </div>
    <div ref="slideContainer" class="slide-container">
      <button
        class="fullscreen-button"
        type="button"
        :aria-label="isFullscreen ? 'Sair da tela cheia' : 'Abrir em tela cheia'"
        :title="isFullscreen ? 'Sair da tela cheia' : 'Abrir em tela cheia'"
        @click="toggleFullscreen"
      >
        <span class="fullscreen-icon" aria-hidden="true"></span>
        <span>{{ isFullscreen ? 'Sair da tela cheia' : 'Tela cheia' }}</span>
      </button>
      <iframe
        class="post-frame"
        :title="post.title"
        :srcdoc="post.html"
        sandbox="allow-scripts"
        allowfullscreen
      ></iframe>
    </div>
  </article>

  <section v-else class="content-section">
    <h1>Post nao encontrado</h1>
    <RouterLink class="text-link" to="/escola">Voltar para escola</RouterLink>
  </section>
</template>
