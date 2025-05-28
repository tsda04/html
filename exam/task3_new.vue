<template>
  <div class="color-boxes-container">
    <div
      v-for="(color, index) in colors"
      :key="index"
      class="color-box"
      :style="{ backgroundColor: color }"
      @click="changeColor(index)"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ColorBoxes',
  data() {
    return {
      colors: ['red', 'green', 'blue', 'yellow', 'purple']
    }
  },
  methods: {
    changeColor(index) {
      this.colors[index] = this.getRandomColor()
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
  }
}
</script>

<style scoped>
.color-boxes-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
}

.color-box {
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>