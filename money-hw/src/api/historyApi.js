import axios from "axios";

export const getListData = async () => {
  try {
    const res = await axios.get(`/api/money`);
    console.log("moneydb====", res.data);

    return res.data;
  } catch (error) {
    console.log("데이터 가져오기 실패", error);
  }
};

export const addListData = async (text, type, amount) => {
  try {
    await axios
      .post(`/api/money`, {
        description: text,
        amount: parseInt(amount),
        type: type,
      })
      .then(function (response) {
        console.log("포스트 성공", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log("포스트 실패", error);
  }
};
