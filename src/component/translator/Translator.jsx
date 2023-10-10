import { useState } from "react";

import InputHeader from "./InputHeader.jsx";
import OutputContainer from "./OutputContainer.jsx";
import LanguageOptions from "./LanguageOptions.jsx";

const LANGUAGES = ["English", "Hindi", "Spanish"];

const Translator = () => {
    const [submitted, setSubmitted] = useState(false);
    const [outputLanguage, setOutputLanguage] = useState("English");

    function getLanguageCode(language) {
        switch (language) {
            case LANGUAGES[0]:
                return "en";
            case LANGUAGES[1]:
                return "hi";
            case LANGUAGES[2]:
                return "es";
            default:
                return "en";
        }
    }

    const outputLanguageSelectorHandler = (language) => {
        setOutputLanguage(language);
    };

    const submitHandler = async (userInput) => {
        setSubmitted(true);
        let output = await fetch(
            `https://nlp-translation.p.rapidapi.com/v1/translate?text=${userInput}&from${getLanguageCode(
                outputLanguage
            )}`,
            {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key":
                        "067c0c9bc9msh1307ab7b04d3ac3p1817d5jsn7483b7209114",
                    "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com",
                },
            }
        );

        const json = await output.json();
        console.log(json);
    };

    return (
        <div>
            <InputHeader submitHandler={submitHandler} />
            {submitted ? <OutputContainer /> : <div />}
            <LanguageOptions
                LANGUAGES={LANGUAGES}
                outputLanguage={outputLanguage}
                outputLanguageSelectorHandler={outputLanguageSelectorHandler}
            />
        </div>
    );
};

export default Translator;
