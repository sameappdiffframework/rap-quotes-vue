<template>
  <h1>Add a quote</h1>
  <hr/>
  <Form @submit="onSubmit"
        @reset="$emit('reset')"
        v-slot="{meta}"
        :validation-schema="schema">
    <Field id="artist" name="artist" v-slot="{field, meta, errorMessage}">
      <Input type="text"
             label="Artist"
             :error-message="errorMessage"
             v-bind="{...meta, ...field}"/>
    </Field>

    <Field id="source" name="source" v-slot="{field, meta, errorMessage}">
      <Input type="text"
             label="Source"
             :error-message="errorMessage"
             v-bind="{...meta, ...field}"/>
    </Field>

    <Field id="quote" name="quote" v-slot="{field, meta, errorMessage}">
      <Input type="textarea"
             label="Quote"
             :error-message="errorMessage"
             v-bind="{...meta, ...field}"/>
    </Field>

    <button type="submit" :disabled="!meta.valid">Submit</button>
    <button type="reset">Cancel</button>
  </Form>
</template>

<script lang="ts">
import Input from '@/components/forms/Input.vue';
import { emptyQuoteModel, QuoteModel } from '@/services/quotes';
import { configure, Field, Form } from 'vee-validate';
import { defineComponent } from 'vue';
import { object, string } from 'yup';

configure({ validateOnInput: true });
export default defineComponent({
  components: { Input, Field, Form },
  name: 'CreateQuoteForm',
  emits: ['reset', 'submit'],
  methods: {
    onSubmit(input: { quote: string, artist: string, source: string }) {
      const empty = emptyQuoteModel();
      const quote: QuoteModel = Object.assign(empty, {
        quote: input.quote,
        artist: Object.assign(empty.artist, { name: input.artist }),
        source: Object.assign(empty.source, { name: input.source })
      });
      this.$emit('submit', quote);
    }
  },
  data() {
    return {
      schema: object({
        quote: string()
            .max(100, 'Must be 100 characters or less')
            .required('Required'),
        artist: string()
            .max(25, 'Must be 25 characters or less')
            .required('Required'),
        source: string()
            .max(25, 'Must be 25 characters or less')
            .required('Required')
      })
    };
  }
});
</script>

<style scoped>
</style>
