import axios from "axios";

export const axiosCall = {
  get: async (url: string, params = {}) => {
    try {
      const response = await axios.get(url, {
        params,
      });
      const data = response.data;

      return data;

    } catch (error) {
      console.log("API GET error: ", error);
      return [];
    }
  },
};
