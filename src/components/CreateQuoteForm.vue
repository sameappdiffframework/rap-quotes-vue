<template>
  <h1>Add a quote</h1>
  <hr/>
  <form @submit="$emit('submit', $event)" @reset="$emit('reset')">
    <label for="artist">Artist</label>
    <input type="text" id="artist">
    <label for="source">Source</label>
    <input type="text" id="source">
    <label for="quote">Quote</label>
    <textarea id="quote"></textarea>
    <button type="submit">Submit</button>
    <button type="reset">Cancel</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreateQuoteForm',
  emits: ['reset', 'submit']
});
</script>

<style scoped>
input.error,
textarea.error {
  border: 1px solid indianred;
}
</style>
