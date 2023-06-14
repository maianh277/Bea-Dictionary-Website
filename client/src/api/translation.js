import axios from "axios";
export const history = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/translatehistory",
      {
        id: localStorage.getItem("id"),
        para_before: data.inputText,
        para_after: data.translatedText,
        time: new Date().toLocaleString(),
      }
    );

    if (response.status === 200) {
      console.log("Translation saved successfully");
    }
  } catch (error) {
    console.error(error);
  }
};
