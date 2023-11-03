<template>
  <div id="id">
    <app-header />

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader,
  },

}
</script>

<style>
</style>