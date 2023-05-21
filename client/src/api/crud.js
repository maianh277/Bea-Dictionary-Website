import axios from "axios";
const url = "http://localhost:8080/";

export const editUser = (data) => {
  const id = localStorage.getItem("id");
  try {
    axios({
      method: "post",
      url: url + "editUser",
      mode: "cors",
      data: {
        fullname: data.fullname,
        email: data.email,
        bio: data.bio,
        phone: data.phone,
        id: id,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
