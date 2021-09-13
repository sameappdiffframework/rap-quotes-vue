<template>
  <Modal v-if="modalOpen">
    <CreateQuoteForm @reset="closeModal" @submit="addQuote"/>
  </Modal>
  <Header @create-clicked="openModal"/>
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
import Modal from '@/components/Modal.vue';
import { QuoteModel } from '@/components/QuoteWall.vue';
import CreateQuoteForm from '@/components/CreateQuoteForm.vue';

export default defineComponent({
  name: 'App',
  components: { Footer, Header, Modal, CreateQuoteForm },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    addQuote(quote: QuoteModel) {
      console.log('addQuote', quote);
      this.closeModal();
    }
  },
  data() {
    return {
      modalOpen: false
    };
  }
});
</script>
