import axios from "axios";
const url = "http://localhost:8080/";

export const history = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/translatehistory",
      {
        id: localStorage.getItem("id"),
        para: localStorage.getItem("translationHistory"),
      }
    );

    if (response.status === 200) {
      console.log("Translation saved successfully");
    }
  } catch (error) {
    console.error(error);
  }
};
