import axios from "axios";

const getDetailUser = (data) => {
    const id = localStorage.getItem("id");
    axios
        .post(
            "http://localhost:8080/user",
            {
                id: id,
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        )
        .then((res) => {
            data.setUser(res.data.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

export default getDetailUser;
