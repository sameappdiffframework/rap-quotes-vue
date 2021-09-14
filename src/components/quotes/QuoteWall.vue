<template>
  <h1>Rap Quotes</h1>
  <Quote v-for="quote in quotes" :key="quote.id" :quote="quote"/>
</template>

<script lang="ts">
import Quote from '@/components/quotes/Quote.vue';
import { defineComponent, PropType } from 'vue';

export interface QuoteModel {
  id: string,
  quote: string;
  artist: {
    name: string;
    url?: string;
  };
  source: {
    name: string;
    url?: string;
    image?: string;
  };
}

export default defineComponent({
  name: 'QuoteWall',
  components: { Quote },
  props: {
    quotes: Array as PropType<QuoteModel[]>
  }
});
</script>
