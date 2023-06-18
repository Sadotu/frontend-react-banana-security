import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import axios from "axios";

function AuthContextProvider({ children }) {
    console.log()
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null
    });

    const navigate = useNavigate();

    const registerUser = async (data) => {
        try {
            await axios.post('http://localhost:3000/register', data);
            console.log("Hoera, je hebt een nieuw account aangemaakt!")
            console.log("Probeer ermee in te loggen")
            navigate("/signin")
        } catch (error) {
            console.error("Er is iets misgegaan bij de invoer, probeer het nog eens", error);
        }
    };

    async function login(jwt_token) {
        const decodedToken = jwt_decode(jwt_token);
        localStorage.setItem('token', jwt_token);

        try {
            const response = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt_token}`,
                },
            });

            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    email: response.data.email,
                    username: response.data.username,
                    id: decodedToken.id,
                },
            });
            console.log("De gebruiker is ingelogd!");
            navigate("/profile");
        } catch (error) {
            console.error("Er is een fout opgetreden bij het ophalen van de gebruikersgegevens", error);
        }
    }


    function logout() {
        localStorage.removeItem('token')
        setAuth({
            ...auth,
            isAuth: false,
            user: null
        })
        console.log("De gebruiker is uitgelogd!")
        navigate("/signin")
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        registerUser,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    );
}

export const AuthContext = createContext(null)

export default AuthContextProvider;