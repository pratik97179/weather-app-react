import { useState } from "react";
import LanguageButton from "./LanguageButton";

const LanguageOptions = ({
    LANGUAGES,
    outputLanguage,
    outputLanguageSelectorHandler,
}) => {
    const outputLanguageChangeHandler = (selectedLanguage) => {
        outputLanguageSelectorHandler(selectedLanguage);
    };

    return (
        <div>
            <h2 className="output-title">Languages</h2>
            {LANGUAGES.map((language) => (
                <LanguageButton
                    key={language}
                    buttonText={language}
                    currentSelectedLanguage={outputLanguage}
                    outputLanguageChangeHandler={outputLanguageChangeHandler}
                />
            ))}
        </div>
    );
};

export default LanguageOptions;
