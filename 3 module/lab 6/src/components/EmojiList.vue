<template>
  <div class="emoji-list">
    <h2>{{ title }}</h2>
    <div class="emoji-grid">
      <div
        v-for="emoji in emojis"
        :key="emoji.name"
        @click="selectEmoji(emoji)"
        :class="{ selected: isSelected(emoji) }"
      >
        <Emoji :emoji="emoji" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import Emoji from './Emoji.vue';

const props = defineProps({
  emojis: {
    type: Array,
    required: true,
  },
  selectedEmoji: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['select-emoji']);

const selectEmoji = (emoji) => {
  emit('select-emoji', emoji);
};

const isSelected = (emoji) => {
  return props.selectedEmoji && props.selectedEmoji.name === emoji.name;
};
</script>

<style>
.emoji-list {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
}

.emoji-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
}

.selected {
  background-color: #e3f2fd;
  border-radius: 50%;
}
</style>
