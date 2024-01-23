import axios from "axios";

const URL = "http://localhost:4000";

export const createUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/create-user`, data).then((res) => {
      return res.data?.data;
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
};

export const upgradePlan = async (data: any) => {
  try {
    return await axios.patch(`${URL}/upgrade-user-plan`, data).then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
};
