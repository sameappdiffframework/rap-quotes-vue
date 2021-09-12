<template>
  <header>
    <nav>
      <ul class="no-bullets">
        <li>
          <a>Create quote</a>
        </li>
        <li>
          <router-link to="/">All quotes</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header'
});
</script>

<style scoped>
header {
  height: 0;
  border-left: 26px solid transparent;
  border-right: 26px solid transparent;
  border-top: 40px solid var(--primary-accent);
}

header a {
  color: var(--bg-color);
}

header a:hover {
  color: var(--secondary-accent);
  border-bottom: 2px solid var(--secondary-accent);
}

nav > ul {
  display: flex;
  justify-content: space-around;
}

nav > ul > li {
  text-transform: uppercase;
  margin-top: -40px;
}
</style>
