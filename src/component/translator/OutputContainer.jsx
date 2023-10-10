import { useState } from "react";
import "../../styles/translator/output-container.css";

const OutputContainer = () => {
    const [translatedText, setTranslatedText] = useState("");

    return (
        <div className="output-background">
            <h1 className="output-label">Output</h1>
            <div className="translated-text">
                <span contentEditable="true">{translatedText}</span>
            </div>
        </div>
    );
};

export default OutputContainer;
