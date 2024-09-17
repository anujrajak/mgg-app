import axios from "axios";

const BASE_URL = "http://localhost:3000/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjY2ZTdlM2JiY2QwNDBhMmY1YzM4MmZlYSIsImVtYWlsIjoicmFqYWtrYW1lc2hAZ21haWwuY29tIiwiZnVsbG5hbWUiOiJLYW1lc2ggUmFqYWsifSwidXNhZ2UiOiJhdXRoLWFjY2VzcyIsImlhdCI6MTcyNjU2NDY1MCwiZXhwIjoxNzI2NTY1NTUwfQ.zlnvm1y0TE9Nx_VksPaeQIWFA9NiVeWlIT_1Zw8VDVM";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    deviceIdentifier: "asdasd",
    Authorization: `Bearer ${TOKEN}`,
  },
});
