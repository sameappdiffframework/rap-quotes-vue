<template>
  <Overlay/>
  <div role="dialog">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Overlay from '@/components/modal/Overlay.vue';

export default defineComponent({
  name: 'Modal',
  components: { Overlay }
});
</script>

<style scoped>
[role="dialog"] {
  background-color: var(--bg-color);
  min-height: 30%;
  max-height: 70%;
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5em;
  z-index: 2;
}
</style>
