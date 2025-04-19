<template>
  <div class="budget-app">
    <h1>УЧЁТ РАСХОДОВ</h1>

    <div v-if="history.length > 0" class="balances">
      <p>Баланс: {{ totalBalance }}</p>
      <p>Расходы: {{ outcomeBalance }}</p>
      <p>Доходы: {{ incomeBalance }}</p>
    </div>
    <p v-else class="no-operations">Вы не совершали финансовых операций</p>

    <div class="history">
      <div v-for="item in history" :key="item.id" class="history-item">
        <span>{{ item.text }}</span>
        <span :class="{ income: item.amount > 0, outcome: item.amount < 0 }">
          {{ item.amount > 0 ? '+' : '' }}{{ item.amount }}
        </span>
      </div>
    </div>

    <div class="add-form">
      <input
        type="text"
        v-model.trim="title"
        placeholder="Введите название"
        class="form-input"
      />
      <input
        type="number"
        v-model.number="amount"
        placeholder="Введите сумму"
        class="form-input"
      />
      <button @click="addItem" class="add-button">Добавить</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';

const history = reactive([]);
const title = ref('');
const amount = ref(0);

let nextId = 1;

const addItem = () => {
  if (title.value && amount.value !== 0) {
    history.push({
      id: nextId++,
      text: title.value,
      amount: amount.value,
    });
    title.value = '';
    amount.value = 0;
  }
};

const incomeBalance = computed(() => {
  return history.reduce((sum, item) => {
    return item.amount > 0 ? sum + item.amount : sum;
  }, 0);
});

const outcomeBalance = computed(() => {
  return history.reduce((sum, item) => {
    return item.amount < 0 ? sum + item.amount : sum;
  }, 0);
});

const totalBalance = computed(() => {
  return incomeBalance.value + outcomeBalance.value;
});
</script>

<style>
.budget-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}

.balances {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.balances p {
  margin: 5px 0;
}

.no-operations {
  text-align: center;
  color: #666;
  font-style: italic;
}

.history {
  margin: 20px 0;
}

.history-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.income {
  color: green;
}

.outcome {
  color: red;
}

.add-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.form-input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #45a049;
}
</style>
