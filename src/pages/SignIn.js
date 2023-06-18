import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

function SignIn() {
    const { login } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submitHandler = async (data) => {
        try {
            const res = await axios.post(
                'http://localhost:3000/login', data
            )
            login(res.data.accessToken)
        } catch (e) {
            console.error("Onjuist email and wachtwoord combinatie", e)
            reset()
        }
    };

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="container">
                <div className="input-container">
                    <label className="form-label">Email: </label>
                    <Input
                        inputType="text"
                        inputName="email"
                        inputId="email"
                        validationRules={{ required: "Dit veld is verplicht" }}
                        register={register}
                        error={errors}
                    />
                </div>
                <div className="input-container">
                    <label className="form-label">Password: </label>
                    <Input
                        inputType="text"
                        inputName="password"
                        inputId="password"
                        validationRules={{ required: "Dit veld is verplicht" }}
                        register={register}
                        error={errors}
                    />
                </div>
                <Button
                    buttonType="submit"
                    buttonText="Inloggen"
                ></Button>
            </div>
        </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;