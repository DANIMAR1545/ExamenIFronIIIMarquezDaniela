import { useState } from "react";
import Card from "./Card";

const Form = () => {
    const [name, setName] = useState("");
    const [hobbie, setHobbie] = useState("");
    const [isError, setIsError] = useState(false);
    const [showCard, setShowCard] = useState(false);
    

    const validateName = (name) => {

        const withoutSpacesName = name.trim();
        if (withoutSpacesName.length > 2) {
        return true;
        } else {
        return false;
        }
    };

    const validateHobbie = (hobbie) => {

        const withoutSpacesHobbie = hobbie.trim();

        if (withoutSpacesHobbie.length > 5) {
            return true;
        } else {
        return false;
        }
    };


    function signUpUser(e) {
        e.preventDefault();

        const isValidName = validateName(name);
        const isValidHobbie = validateHobbie(hobbie);

        if (isValidName && isValidHobbie) {
            setIsError(false);
            setShowCard(true);
        }   
        else {
            setIsError(true);
        }
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeHobbie = (e) => {
        setHobbie(e.target.value);
    };

    return (
        <>
            <form onSubmit={signUpUser}>
            <div>
                <input
                type="text"
                placeholder="Escriba su nombre"
                value={name}
                onChange={onChangeName}
            />
            </div>
            <div>
                <input
                type="text"
                placeholder="Escriba el hobbie"
                value={hobbie}
                onChange={onChangeHobbie}
            />
            </div>
            {isError && <p>Por favor chequea que la información sea correcta</p>}
            <div>
        <button type="submit">Enviar</button>
        </div>
        </form>
        {showCard && (
        <div>
            <Card name={name} hobbie={hobbie} />
        </div>
        
    )}
    </>
);
}

export default Form;