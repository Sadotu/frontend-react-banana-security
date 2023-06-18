import React from 'react';
function Input({ inputType, inputName, inputId, validationRules, register, error }) {
    return (
        <>
            <input
                type={inputType}
                id={inputId}
                {...register(inputName, validationRules)}
            />
            {error[inputName] && <p>{error[inputName].message}</p>}
        </>
    );
}

export default Input;