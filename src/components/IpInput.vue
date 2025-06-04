<template>
  <div class="ip-input-container">
    <input
      type="text"
      v-model="ipAddress"
      placeholder="请输入IP地址 (例如: 8.8.8.8)"
      @keyup.enter="emitSearch"
      class="ip-input"
    />
    <button @click="emitSearch" class="search-button">查询</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const ipAddress = ref('');
const emit = defineEmits(['search']);

const emitSearch = () => {
  if (ipAddress.value.trim()) {
    emit('search', ipAddress.value.trim());
  }
};
</script>

<style scoped>
.ip-input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.ip-input {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
  max-width: 80%;
  box-sizing: border-box;
  margin-right: 10px;
}

.ip-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
}

.search-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
}
</style>
