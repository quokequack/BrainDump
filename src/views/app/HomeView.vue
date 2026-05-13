<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { categories, subjects } from '../../content'
</script>

<template>
  <section class="hero">
    <div class="power-mark" aria-hidden="true">
      <img src="/img/power.ico" alt="" />
    </div>
    <p class="eyebrow">Miniblog pessoal</p>
    <h1>Notas organizadas para trabalho, estudos e escola.</h1>
    <p>
      Um espaco simples para reunir materiais, disciplinas e registros curtos de aprendizado.
    </p>
  </section>

  <section class="grid-section" aria-label="Categorias">
    <RouterLink v-for="category in categories" :key="category.slug" class="card" :to="`/${category.slug}`">
      <span class="card-label">Categoria</span>
      <h2>{{ category.title }}</h2>
      <p>{{ category.description }}</p>
    </RouterLink>
  </section>

  <section class="content-section">
    <div class="section-heading">
      <span class="card-label">Disciplinas</span>
      <h2>Rotas disponiveis</h2>
    </div>
    <div class="list">
      <RouterLink v-for="subject in subjects" :key="subject.slug" class="list-item" :to="`/escola/${subject.slug}`">
        <strong>{{ subject.title }}</strong>
        <span>{{ subject.period }} · {{ subject.posts.length }} posts</span>
      </RouterLink>
    </div>
  </section>
</template>
