import React, { useEffect } from "react";
import { Alert } from "./Alert";

type InputProps = {
    inputId: string;
    inputProcess: (value: string) => string;
    placeholderText: string;
}

export const Input: React.FC<InputProps> = ({ inputId, inputProcess, placeholderText }) => {
    let inputElement: HTMLInputElement | null;
    const [message, setMessage] = React.useState('');

    function processClick(): void {
        setMessage('');
        const messageRes: string = inputProcess(inputElement!.value);
        if (messageRes == '') {
            inputElement!.value = '';
        } else {
            setMessage(messageRes);
        }
    }
    function getRandomId(min: number, max: number): string {
        let result: string;
        result = "" + Math.floor(Math.random() * (max - min) + min);
        return inputId = result;
    }

    React.useEffect(() => {
        inputElement = document.getElementById(inputId) as HTMLInputElement;
    })

    return <div>
        <input id={inputId} placeholder={placeholderText} />
        <button onClick={processClick}>click</button>
        {message && <Alert type={"error"} message={message} />}
    </div>
}