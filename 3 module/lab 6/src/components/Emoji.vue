<template>
  <span class="emoji" v-html="emoji.htmlCode[0]"></span>
</template>

<script setup>
defineProps({
  emoji: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.emoji {
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.emoji:hover {
  transform: scale(1.2);
}
</style>
