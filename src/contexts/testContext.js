import {createContext} from "react";

const initialState = {
    firstName: "Martin",
    email: "martin@mail.com"
}

export const testAction = {
    CHANGE_EMAIL: "CHANGE_EMAIL",
    CHANGE_FIRST_NAME: "CHANGE_FIRST_NAME",
};

const testContext = createContext(initialState);

