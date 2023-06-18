import React, {useContext} from 'react';
import logo from '../../assets/banana-01.png';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import Button from "../Button/Button";

function NavBar() {
    const { isAuth, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <nav>
            <Link to="/">
                <span className="logo-container">
                    <img src={logo} alt="logo"/>
                    <h3>
                      Banana Security
                    </h3>
                </span>
            </Link>

            <div>
                {isAuth ? (
                    <Button
                        buttonText="Logout"
                        clickHandler={logout}
                    ></Button>
                ) : (
                    <>
                        <Button
                            buttonText="Log in"
                            clickHandler={() => navigate('/signin')}
                        ></Button>
                        <Button
                            buttonText="Registreren"
                            clickHandler={() => navigate('/signup')}
                        ></Button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default NavBar;