import axios from "axios";

const url = "http://localhost:8080/";

export const editUser = async (data) => {
  const id = localStorage.getItem("id");

  try {
    const response = await axios.post(url + "editUser", {
      fullname: data.fullname,
      email: data.email,
      bio: data.bio,
      phone: data.phone,
      avatar: data.avatar,
      id: id,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
