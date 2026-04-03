<template>
  <v-sheet class="d-flex flex-column justify-center align-center h-100 ga-3" color="indigo-lighten-5">
    <p class="text-display-large text-indigo-darken-3">{{ formattedTime }}</p>

    <v-btn v-if="!isRunning" @click="startTimer" icon="mdi-play" color="indigo-darken-1" class=""></v-btn>
    <v-btn v-else @click="stopTimer" icon="mdi-pause" color="blue-darken-2"></v-btn>

    <v-btn variant="text" color="indigo-darken-2" @click="resetTimer">Reset</v-btn>
  </v-sheet>
</template>

<script lang="ts" setup>
import { useTimer } from '@/composables/useTimer'

const emit = defineEmits(['finished'])

const { formattedTime, isRunning, startTimer, stopTimer, resetTimer } = useTimer(25 * 60, {
  onFinish: () => emit('finished'),
})
</script>

<style scoped>

</style>
