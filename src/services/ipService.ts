import axios from 'axios';

// 定义 ip-api.com 返回的数据结构
interface IpApiInfo {
  query: string; // IP 地址
  status: string; // success 或 fail
  message?: string; // 错误信息
  country?: string; // 国家代码
  countryCode?: string; // 国家代码
  region?: string; // 地区代码
  regionName?: string; // 地区名称
  city?: string; // 城市
  zip?: string; // 邮编
  lat?: number; // 纬度
  lon?: number; // 经度
  timezone?: string; // 时区
  isp?: string; // ISP
  org?: string; // 组织
  as?: string; // AS 号
  [key: string]: any;
}

// 统一的 IpInfo 接口，用于组件展示
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

export async function getIpInfo(ipAddress: string = ''): Promise<IpInfo> {
  try {
    const url = ipAddress ? `https://ip-api.com/json/${ipAddress}` : `https://ip-api.com/json/`;
    const response = await axios.get<IpApiInfo>(url);
    const data = response.data;

    if (data.status === 'fail') {
      throw new Error(data.message || '无法获取IP信息');
    }

    // 将 ip-api.com 的数据映射到统一的 IpInfo 接口
    return {
      ip: data.query,
      city: data.city || 'N/A',
      region: data.regionName || 'N/A',
      country: data.countryCode || 'N/A',
      country_name: data.country || 'N/A',
      loc: `${data.lat || 'N/A'},${data.lon || 'N/A'}`,
      org: data.org || data.isp || 'N/A',
      postal: data.zip || 'N/A',
      timezone: data.timezone || 'N/A',
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      throw new Error(errorMessage || '无法获取IP信息');
    } else if (error instanceof Error) {
      throw error;
    }
    throw new Error('发生未知错误');
  }
}
