import { computed, onUnmounted, ref } from 'vue'

type UseTimerOptions = {
  onFinish?: () => void
}

export function useTimer(initialDuration: number, options: UseTimerOptions = {}) {
  const timeLeft = ref(initialDuration)
  const isRunning = ref(false)
  let timerId: number | null = null

  const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60)
    const seconds = timeLeft.value % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  })

  const progress = computed(() => {
    const elapsed = initialDuration - timeLeft.value
    return (elapsed / initialDuration) * 100
  })

  const stopTimer = () => {
    if (timerId != null) {
      clearInterval(timerId)
      timerId = null
      isRunning.value = false
    }
  }

  const tick = () => {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1
      return
    }

    stopTimer()
    options.onFinish?.()
  }

  const startTimer = () => {
    if (timerId == null) {
      timerId = window.setInterval(tick, 1000)
      isRunning.value = true
    }
  }

  const resetTimer = () => {
    stopTimer()
    timeLeft.value = initialDuration
  }

  onUnmounted(() => {
    stopTimer()
  })

  return {
    formattedTime,
    isRunning,
    progress,
    resetTimer,
    startTimer,
    stopTimer,
    timeLeft,
  }
}
