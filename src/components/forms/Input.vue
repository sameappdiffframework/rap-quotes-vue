<template>
  <div>
    <label v-if="label" :for="name">{{ label }}</label>
    <input v-if="type === 'text'"
           type="text"
           :id="name"
           :name="name"
           :class="{[errorClass]: showError}"/>
    <textarea v-if="type === 'textarea'"
              :id="name"
              :name="name"
              :class="{[errorClass]: showError}"/>
    <div v-if="showError">{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    label: String,
    name: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<'text' | 'textarea'>,
      required: true
    },
    errorClass: {
      type: String,
      default: 'error'
    },
    errorMessage: String,
    dirty: Boolean,
    touched: Boolean,
    valid: Boolean
  },
  computed: {
    showError() {
      return (this.dirty || this.touched) && !this.valid;
    }
  }
});
</script>

<style scoped>
input.error,
textarea.error {
  border: 1px solid indianred;
}
</style>
