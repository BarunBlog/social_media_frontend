import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        "_id": "647b4e4c899432f5fb811ca9",
        "username": "TestUser",
        "email": "testuser@gmail.com",
        "password": "$2b$10$gdqt2rkIeS3nrEh/LjAfBO41L6z1LBqclwOjuWMLjOvkdqkDIaVMK",
        "profilePicture": "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
        "coverPicture": "",
        "followers": [],
        "isAdmin": false,
        "createdAt": "2023-06-03T14:29:32.677Z",
        "updatedAt": "2023-06-10T14:18:56.504Z",
        "__v": 2,
        "followings": [
          "6482130ff0018e511ed5e3dc"
        ]
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}

        </AuthContext.Provider>
    )
}