<template>
  <div class="number-facts-app">
    <h1>Факты о числах</h1>

    <div class="search-container">
      <input
        type="number"
        v-model.number="number"
        @keyup.enter="fetchFact"
        placeholder="Введите число"
        class="search-input"
      />

      <select v-model="category" class="category-select">
        <option value="trivia">Случайный факт</option>
        <option value="math">Математический факт</option>
        <option value="year">Факт о годе</option>
      </select>

      <button @click="fetchFact" :disabled="isLoading" class="search-button">
        {{ isLoading ? 'Загрузка...' : 'Поиск' }}
      </button>
    </div>

    <div v-if="isLoading" class="loading-indicator">
      <div class="spinner"></div>
    </div>

    <div v-else-if="fact" class="fact-result">
      <p>{{ fact.text }}</p>
    </div>

    <div v-else-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>

    <div v-else class="instruction">
      <p>Введите число и выберите категорию, чтобы получить интересный факт!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const number = ref('');
const category = ref('trivia');
const fact = ref(null);
const errorMessage = ref('');
const isLoading = ref(false);

const fetchFact = async () => {
  if (!number.value && number.value !== 0) return;

  isLoading.value = true;
  fact.value = null;
  errorMessage.value = '';

  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `http://numbersapi.com/${number.value}/${category.value}?json`;

    const response = await fetch(proxyUrl + apiUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    if (!response.ok) {
      throw new Error('Не удалось получить данные');
    }

    const data = await response.json();

    if (data.found) {
      fact.value = data;
    } else {
      errorMessage.value = `${number.value} - ${
        category.value === 'year' ? 'скучный год' : 'скучное число'
      }`;
    }
  } catch (error) {
    errorMessage.value = 'Произошла ошибка при получении данных';
    console.error('Error fetching fact:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style>
.number-facts-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}

.search-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.category-select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.search-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.loading-indicator {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4caf50;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fact-result {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
}

.fact-result p {
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
}

.error-message {
  background-color: #ffebee;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  color: #d32f2f;
}

.instruction {
  text-align: center;
  color: #666;
  font-style: italic;
  margin-top: 20px;
}
</style>
