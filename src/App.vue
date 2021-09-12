<template>
  <Header></Header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import './App.css';

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
});
</script>
