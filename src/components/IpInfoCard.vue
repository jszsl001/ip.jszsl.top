<template>
  <div v-if="ipInfo" class="ip-info-card">
    <h2>IP 信息</h2>
    <div class="info-item">
      <strong>IP 地址:</strong> <span>{{ ipInfo.ip }}</span>
    </div>
    <div class="info-item">
      <strong>城市:</strong> <span>{{ ipInfo.city }}</span>
    </div>
    <div class="info-item">
      <strong>地区:</strong> <span>{{ ipInfo.region }}</span>
    </div>
    <div class="info-item">
      <strong>国家:</strong> <span>{{ ipInfo.country }} ({{ ipInfo.country_name }})</span>
    </div>
    <div class="info-item">
      <strong>组织:</strong> <span>{{ ipInfo.org }}</span>
    </div>
    <div class="info-item">
      <strong>经纬度:</strong> <span>{{ ipInfo.loc }}</span>
    </div>
    <div class="info-item">
      <strong>邮编:</strong> <span>{{ ipInfo.postal }}</span>
    </div>
    <div class="info-item">
      <strong>时区:</strong> <span>{{ ipInfo.timezone }}</span>
    </div>
  </div>
  <div v-else-if="error" class="error-message">
    <p>查询失败: {{ error }}</p>
  </div>
  <div v-else-if="loading" class="loading-message">
    <p>正在查询...</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

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
  [key: string]: any; // 允许其他未定义的属性
}

defineProps<{
  ipInfo?: IpInfo | null;
  loading: boolean;
  error: string | null;
}>();
</script>

<style scoped>
.ip-info-card {
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 25px;
  margin: 20px auto;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: left;
}

h2 {
  color: #007bff;
  text-align: center;
  margin-bottom: 25px;
  font-size: 24px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px dashed #e0e0e0;
}

.info-item:last-child {
  border-bottom: none;
}

.info-item strong {
  color: #333;
  flex-basis: 35%;
  font-weight: 600;
}

.info-item span {
  color: #555;
  flex-basis: 60%;
  text-align: right;
}

.error-message {
  color: #dc3545;
  margin-top: 20px;
  font-size: 18px;
}

.loading-message {
  color: #007bff;
  margin-top: 20px;
  font-size: 18px;
}
</style>
