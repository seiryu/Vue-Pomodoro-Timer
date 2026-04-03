<template>
  <v-app class="">
    <v-btn @click="toggleFocus" variant="text" class="position-absolute top-0 right-0 mt-4 mr-4" icon="mdi-cached"></v-btn>
    <v-main>
      <Focus v-if="isFocus" @finished="toggleFocus" />
      <Rest v-else @finished="toggleFocus" />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import Focus from '@/components/Focus.vue' 
  import Rest from '@/components/Rest.vue' 
  import { ref } from 'vue';

  const isFocus = ref(true)

  function toggleFocus() {
    isFocus.value = !isFocus.value
  }

</script>

<style scoped>

</style>
