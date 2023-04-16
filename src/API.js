import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: { "Content-Type": "application/json" },
});

const post = async (params = "", postData) => {
  try {
    const { data } = await instance.post(params, postData);
    return data;
  } catch (e) {
    console.error(e);
  }
};

const get = async (params = "") => {
  try {
    const response = await instance.get(params);
    return response;
  } catch (e) {
    console.error(e);
  }
};

export { post, get };
