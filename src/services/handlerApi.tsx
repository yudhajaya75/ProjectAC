import axios from "axios";

const Bearer_token = process.env.REACT_APP_ADMIN_TOKEN;

export const HTTPAruna = axios.create({
  baseURL: process.env.REACT_APP_UPLOAD_URL,
  headers: {
    Authorization: `Bearer ${Bearer_token}`,
  },
});

export const handlerApi = async (endpoint: string) => {
  try {
    const res = await HTTPAruna.get(endpoint);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
