<template>
  <div class="emoji-mixer">
    <h2>Результат смешивания</h2>
    <div class="mixer-container">
      <Emoji :emoji="firstEmoji" class="mixer-emoji" />
      <span>+</span>
      <Emoji :emoji="secondEmoji" class="mixer-emoji" />
      <span>=</span>
      <img
        :src="kitchenEmoji"
        alt="Mixed emoji"
        class="mixed-emoji"
        v-if="kitchenEmoji"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Emoji from './Emoji.vue';

const props = defineProps({
  firstEmoji: {
    type: Object,
    required: true,
  },
  secondEmoji: {
    type: Object,
    required: true,
  },
});

const kitchenEmoji = computed(() => {
  if (props.firstEmoji && props.secondEmoji) {
    const unicodeFirst = props.firstEmoji.unicode[0]
      .replace('U+', '')
      .toLowerCase();
    const unicodeSecond = props.secondEmoji.unicode[0]
      .replace('U+', '')
      .toLowerCase();
    return `https://emk.vercel.app/s/${unicodeFirst}_${unicodeSecond}?size=96`;
  }
  return null;
});
</script>

<style>
.emoji-mixer {
  margin-top: 30px;
}

.mixer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

.mixer-emoji {
  font-size: 3rem;
}

.mixed-emoji {
  width: 64px;
  height: 64px;
}
</style>
