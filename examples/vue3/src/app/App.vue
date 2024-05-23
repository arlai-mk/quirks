<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MyComponent from '../components/MyComponent.vue';
</script>

<template>
  <MyComponent />
  <header>
    <nav>
      <RouterLink to="/cosmoshub/">Switch to Cosmos Hub</RouterLink>
      |
      <RouterLink to="/osmosis/">Switch to Osmosis</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
