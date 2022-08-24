import { ApiClient } from "./apiClient";
// eslint-disable-next-line import/no-anonymous-default-export
let client = new ApiClient();
export default {
  getRandomQuotes() {
    return client.get(`/random`);
  },
};
