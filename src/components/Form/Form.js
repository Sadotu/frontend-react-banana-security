import React from "react";
import { useForm } from "react-hook-form";
import Input from  "../Input/Input"
import Button from "../Button/Button"

function Form( { isRegistration, handleSubmit } ) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="input-container">
                    <label className="form-label">Gebruikersnaam: </label>
                    <Input
                        inputType="text"
                        inputName="userName"
                        inputId="userName"
                        validationRules={{ required: "Dit veld is verplicht" }}
                        register={register}
                        error={errors}
                    />
                </div>
                {isRegistration && (
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
                    )}
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
                    buttonText={isRegistration ? 'Registreren' : 'Inloggen'}
                ></Button>
            </div>
        </form>
    );
}

export default Form;
