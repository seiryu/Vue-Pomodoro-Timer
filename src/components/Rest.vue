<template>
  <v-sheet class="d-flex flex-column justify-center align-center h-100 ga-3" color="amber-lighten-5">
    <p class="text-display-large text-deep-orange-darken-2">{{ formattedTime }}</p>

    <v-btn v-if="!isRunning" @click="startTimer" icon="mdi-play" color="amber-darken-2" class=""></v-btn>
    <v-btn v-else @click="stopTimer" icon="mdi-pause" color="orange-darken-2"></v-btn>

    <v-btn variant="text" color="deep-orange-darken-1" @click="resetTimer">Reset</v-btn>
  </v-sheet>
</template>

<script lang="ts" setup>
import { useTimer } from '@/composables/useTimer'

const emit = defineEmits(['finished'])

const { formattedTime, isRunning, startTimer, stopTimer, resetTimer } = useTimer(5 * 60, {
  onFinish: () => emit('finished'),
})
</script>

<style scoped>

</style>
