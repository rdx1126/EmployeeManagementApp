import axios from "axios";

let baseURL = "http://localhost:5000/api/auth/";
export const signin = (payload) => {
    axios({
        url: `${baseURL}signin`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: payload,
    })
        .then((data) => console.log(data.data))
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
        .then((data) => console.log(data.data))
        .catch((error) => console.log(error));
};
