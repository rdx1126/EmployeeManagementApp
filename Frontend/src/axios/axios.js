import axios from "axios";

let baseURL = "http://localhost:5000/api/auth/";

export const getUserInfo = (token) => {
    axios({
        url: `${baseURL}getuser`,
        method: "POST",
        headers: {
            "auth-token": `${token}`,
        },
        data: "",
    })
        .then((data) => console.log(data.data))
        .catch((error) => console.log(error));
};

export const signin = async (payload) => {
    return await axios({
        url: `${baseURL}signin`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: payload,
    })
        .then((data) => {
            localStorage.setItem("data", JSON.stringify(data.data));
        })
        .catch((error) => console.log(error));
};

export const signup = (payload) => {
    axios({
        url: `${baseURL}signup`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: payload,
    })
        .then((data) => {
            console.log(data.data);
            localStorage.setItem("data", JSON.stringify(data.data));
        })
        .catch((error) => console.log(error));
};
