<template>
  <form @submit.prevent="registerUser">
    <div>
      <label for="username">Имя пользователя:</label>
      <input type="text" id="username" v-model="userData.username" />
    </div>
    <div>
      <label for="lastname">Фамилия пользователя:</label>
      <input type="text" id="lastname" v-model="userData.lastname" />
    </div>
    <div>
      <label>Пол:</label>
      <input type="radio" id="male" value="male" v-model="userData.gender" />
      <label for="male">Мужской</label>
      <input
        type="radio"
        id="female"
        value="female"
        v-model="userData.gender"
      />
      <label for="female">Женский</label>
    </div>
    <div>
      <label for="password">Пароль:</label>
      <input
        :type="showPassword ? 'text' : 'password'"
        id="password"
        v-model="userData.password"
      />
    </div>
    <div>
      <label for="confirmPassword">Подтверждение пароля:</label>
      <input
        :type="showPassword ? 'text' : 'password'"
        id="confirmPassword"
        v-model="userData.confirmPassword"
      />
    </div>

    <div>
      <button
        @mousedown="showPassword = true"
        @mouseup="showPassword = false"
        @mouseleave="showPassword = false"
      >
        Показать пароль
      </button>
    </div>

    <button type="submit" :disabled="passwordsDoNotMatch">
      Зарегистрироваться
    </button>
  </form>

  <p>
    Пользователь: {{ userData.username }} {{ userData.lastname }}.
    {{ userData.gender === 'male' ? 'Мужского' : 'Женского' }} пола.
  </p>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
  setup() {
    const userData = reactive({
      username: '',
      lastname: '',
      gender: '',
      password: '',
      confirmPassword: '',
    });

    const showPassword = ref(false);

    const passwordsDoNotMatch = computed(() => {
      return userData.password !== userData.confirmPassword;
    });

    const registerUser = () => {
      console.log('User Data:', userData);
    };

    return {
      userData,
      showPassword,
      passwordsDoNotMatch,
      registerUser,
    };
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}

input[type='text'],
input[type='password'] {
  margin-bottom: 10px;
  padding: 5px;
}

button {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
