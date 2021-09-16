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
import { QUOTE_STORE } from '@/services/quotes';
import type { QuoteModel } from '@/services/quotes';
import { defineComponent } from 'vue';
import './App.css';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Modal from '@/components/modal/Modal.vue';
import CreateQuoteForm from '@/components/forms/CreateQuoteForm.vue';

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
      QUOTE_STORE.createQuote(quote)
          .then(this.closeModal.bind(this));
    }
  },
  data() {
    return {
      modalOpen: false
    };
  }
});
</script>
