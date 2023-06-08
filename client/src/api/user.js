import axios from "axios";

const getDetailUser = async (data) => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const user = data.user;

  if (Object.keys(user).length === 0) {
    try {
      const response = await axios.post(
        "http://localhost:8080/user",
        {
          id: id,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      data.setUser(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
};

export default getDetailUser;
