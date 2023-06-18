import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function SignUp() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { registerUser } = useContext(AuthContext);

    const submitHandler = (data) => {
        registerUser(data);
    };

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="container">
                <div className="input-container">
                    <label className="form-label">Gebruikersnaam: </label>
                    <Input
                        inputType="text"
                        inputName="username"
                        inputId="username"
                        validationRules={{ required: "Dit veld is verplicht" }}
                        register={register}
                        error={errors}
                    />
                </div>
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
                    buttonText="Registreren"
                ></Button>
            </div>
        </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;