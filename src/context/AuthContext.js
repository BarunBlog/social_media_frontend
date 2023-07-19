import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        "_id": "647b4e4c899432f5fb811ca9",
        "username": "TestUser",
        "email": "testuser@gmail.com",
        "password": "$2b$10$gdqt2rkIeS3nrEh/LjAfBO41L6z1LBqclwOjuWMLjOvkdqkDIaVMK",
        "profilePicture": "https://e0.pxfuel.com/wallpapers/39/255/desktop-wallpaper-stylish-boys-cool-profile-pics-dp-for-facebook-whatsapp-2019-boy-smoke.jpg",
        "coverPicture": "",
        "followers": [
            "647e20f95a23287b0efbb838",
            "6482130ff0018e511ed5e3dc"
        ],
        "isAdmin": false,
        "createdAt": "2023-06-03T14:29:32.677Z",
        "updatedAt": "2023-07-15T13:34:41.593Z",
        "__v": 6,
        "followings": [
            "6482130ff0018e511ed5e3dc",
            "647e20f95a23287b0efbb838"
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