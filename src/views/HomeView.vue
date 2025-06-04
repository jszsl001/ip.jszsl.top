<template>
  <div class="home">
    <h1>IP 地址查询</h1>
    <IpInput @search="handleSearch" />
    <IpInfoCard :ipInfo="ipInfo" :loading="loading" :error="error" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IpInput from '../components/IpInput.vue';
import IpInfoCard from '../components/IpInfoCard.vue';
import { getIpInfo } from '../services/ipService';

interface IpInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  country_name: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
  [key: string]: any;
}

const ipInfo = ref<IpInfo | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

const handleSearch = async (ipAddress: string) => {
  ipInfo.value = null;
  error.value = null;
  loading.value = true;
  try {
    const data = await getIpInfo(ipAddress);
    ipInfo.value = data;
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

// 页面加载时自动查询当前IP
handleSearch('');
</script>

<style scoped>
.home {
  padding: 20px;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}
</style>
