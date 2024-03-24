const envs = import.meta.env;

export default {
  apiKey: envs.VITE_API_PUBLIC_KEY,
  baseApiUrl: envs.VITE_BASE_API_URL
};
