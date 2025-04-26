import axios from "axios";

export const getListData = async () => {
  try {
    const res = await axios.get(`./api/money`);
    console.log("moneydb====", res.data);

    return res.data;
  } catch (error) {
    console.log("데이터 가져오기 실패", error);
  }
};
