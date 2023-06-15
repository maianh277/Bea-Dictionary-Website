import axios from "axios";
const url = "http://localhost:8080/";

export const upload = async (data) => {
  const id = localStorage.getItem("id");
  try {
    await axios.post(url + "uploadPost", {
      id: id,
      content: data.content,
      hashtag: data.hashtag,
      time: new Date().toLocaleString(),
    });
    console.log("Post uploaded successfully");
  } catch (error) {
    console.log(error);
  }
};

export const getpost = async (data) => {
  try {
    const id = localStorage.getItem("id");
    const response = await axios.post(
      "http://localhost:8080/getPost",
      { id },
      { mode: "cors" }
    );
    const results = response.data;
    if (results.length > 0) {
      const sortedPosts = results.sort(
        (a, b) => new Date(b.time) - new Date(a.time)
      );

      data.setIsComment(sortedPosts);
      //   console.log(results);
    }
  } catch (error) {
    console.log(error);
  }
};
