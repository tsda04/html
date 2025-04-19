<template>
  <div class="app">
    <h1>Emoji Kitchen</h1>

    <div class="container">
      <div class="emoji-selectors">
        <EmojiList
          :emojis="emojis"
          @select-emoji="selectFirstEmoji"
          class="emoji-list"
        />
        <EmojiList
          :emojis="emojis"
          @select-emoji="selectSecondEmoji"
          class="emoji-list"
        />
      </div>

      <EmojiMixer
        v-if="selectedSmiles[0] && selectedSmiles[1]"
        :first-emoji="selectedSmiles[0]"
        :second-emoji="selectedSmiles[1]"
        class="emoji-mixer"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EmojiList from './components/EmojiList.vue';
import EmojiMixer from './components/EmojiMixer.vue';

const emojis = ref([]);
const selectedSmiles = ref([null, null]);

const fetchEmojis = async () => {
  try {
    const response = await fetch('https://emojihub.yurace.pro/api/all');
    if (!response.ok) throw new Error('Failed to fetch emojis');
    emojis.value = await response.json();
  } catch (error) {
    console.error('Error fetching emojis:', error);
  }
};

const selectFirstEmoji = (emoji) => {
  selectedSmiles.value[0] = emoji;
};

const selectSecondEmoji = (emoji) => {
  selectedSmiles.value[1] = emoji;
};

onMounted(() => {
  fetchEmojis();
});
</script>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 30px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.emoji-selectors {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.emoji-list {
  flex: 1;
}
</style>
