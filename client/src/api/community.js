import axios from "axios";
const url = "http://localhost:8080/";

export const upload = async (data) => {
  const id = localStorage.getItem("id");
  try {
    await axios.post(url + "uploadPost", {
      id: id,
      content: data.content,
      hashtag: data.hashtag,
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
      data.setIsComment(results);
      //   console.log(results);
    }
  } catch (error) {
    console.log(error);
  }
};

// export const deletepost = async (data) => {
//   try {
//     await axios.delete("http://localhost:8080/deletePost", {
//       data: { data },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
