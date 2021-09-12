<template>
  <Header/>
  <main>
    <router-view></router-view>
  </main>
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './App.css';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: { Footer, Header }
});
</script>
