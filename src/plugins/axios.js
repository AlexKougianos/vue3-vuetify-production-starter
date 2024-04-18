// ~/src/plugins/axios.js
import axios from 'axios'

export default function initAxios() {
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
}
