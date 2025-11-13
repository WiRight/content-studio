<script lang="ts" setup>
interface Props {
  src: string
  sign: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>Image: {{ src }}</div>
    <div>Sign: {{ sign }}</div>
  </div>
</template>

<style scoped></style>