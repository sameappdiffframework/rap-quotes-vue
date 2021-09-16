<template>
  <h1>Rap Quotes</h1>
  <Quote v-for="quote in globalQuotes.quotes" :key="quote.id" :quote="quote"/>
</template>

<script lang="ts">
import Quote from '@/components/quotes/Quote.vue';
import { QUOTE_STORE } from '@/services/quotes';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QuoteWall',
  components: { Quote },
  mounted() {
    QUOTE_STORE.getQuotes();
  },
  data() {
    return {
      globalQuotes: QUOTE_STORE.state
    };
  }
});
</script>
