import { useEffect, useState } from "react";
import "../../styles/translator/language-button.css";

const LanguageButton = ({
    buttonText,
    currentSelectedLanguage,
    outputLanguageChangeHandler,
}) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(buttonText === currentSelectedLanguage);
    });

    function buttonColor() {
        return selected ? "selected-color" : "";
    }

    const clickHandler = () => {
        outputLanguageChangeHandler(buttonText);
    };

    return (
        <div
            className={`language-button ${buttonColor()}`}
            onClick={clickHandler}
        >
            {buttonText}
        </div>
    );
};

export default LanguageButton;
