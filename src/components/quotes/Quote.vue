<template>
  <figure>
    <blockquote>
      <p>{{ quote.quote }}</p>
    </blockquote>
    <img :src="quote.source.image" :alt="quote.source.name"/>
    <figcaption>
      <p>{{ quote.artist.name }}</p>
      <cite>
        <a :href="quote.source.url" target="_blank" rel="noreferrer">
          {{ quote.source.name }}
        </a>
      </cite>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import type { QuoteModel } from '@/services/quotes';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Quote',
  props: {
    quote: Object as PropType<QuoteModel>
  }
});
</script>

<style scoped>
figure {
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}

@media only screen and (min-width: 600px) {
  figure {
    flex-direction: row;
  }
}

blockquote {
  background: unset;
  border-left: unset;
  color: var(--bg-color);
  padding: 0;
  flex-basis: 60%;
}

blockquote p {
  border-radius: 0 50px;
  background: linear-gradient(45deg, var(--primary-accent), var(--secondary-accent));
  padding: 2.27em 4.09em 2.27em 2.72em;
  box-shadow: var(--shadow);
}

figcaption {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 20%;
}

figure img {
  flex-basis: 20%;
  min-width: 7.25em;
  width: 7.25em;
  height: 7.25em;
  margin: -3.625em 0 1.875em 0;
  border-radius: 50%;
  border: solid 3px var(--img-border-color);
  box-shadow: var(--shadow);
}

@media only screen and (min-width: 600px) {
  figure img {
    margin: 0 1.875em 0 -3.625em;
  }
}

figcaption p {
  text-transform: uppercase;
  margin-bottom: .1em;
  text-align: center;
}

cite {
  font-size: .8em;
  text-align: center;
}

</style>
