import axios from "axios";

const url = "http://localhost:8080/";

export const login = async (data) => {
  try {
    const response = await axios({
      method: "post",
      url: url + "login",
      mode: "cors",
      data: {
        email: data.email,
        password: data.password,
      },
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("id", response.data.data.id);
      data.setSuccessMessage(response.data.message);
      data.navigate("/");
    } else {
      data.setErrorMessage(response.data.message);
    }
  } catch (error) {
    if (error.response) {
      data.setErrorMessage(error.response.data.message);
    } else {
      data.setErrorMessage("An error occurred. Please try again.");
    }
  }
};

export const signup = async (data) => {
  try {
    let response = await axios({
      method: "post",
      url: url + "signup",
      data: {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      },
    });
    console.log(response);
    if (response.status === 200) {
      data.navigate("/login");
    } else {
      data.setErrorMessage(response.data.message);
    }
  } catch (error) {
    if (error.response) {
      data.setErrorMessage(error.response.data.message);
    } else {
      data.setErrorMessage("Unknown error occurred.");
    }
  }
};
