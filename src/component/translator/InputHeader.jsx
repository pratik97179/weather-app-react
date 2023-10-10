import { useState } from "react";
import "../../styles/translator/input-header.css";

const InputHeader = ({ submitHandler }) => {
    const [userInput, setUserInput] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        submitHandler(userInput);
        setUserInput("");
    };

    return (
        <div className="header-background">
            <div className="header-content-box">
                <label htmlFor="input" className="header-title">
                    Enter text
                </label>
                <form
                    action="submit"
                    onSubmit={formSubmitHandler}
                    label="translator-form"
                >
                    <input
                        type="text"
                        className="input-box"
                        value={userInput}
                        onChange={(e) => {
                            setUserInput(e.target.value);
                        }}
                        placeholder="Input goes here..."
                    />
                    <button className="submit-button">Translate</button>
                </form>
            </div>
        </div>
    );
};

export default InputHeader;
