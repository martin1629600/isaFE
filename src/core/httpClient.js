import axios from "axios";

export const Axios = axios.create({
    baseURL: "http://localhost:8080"
});

Axios.interceptors.request.use(
    (config) => {

        const token =
            typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);