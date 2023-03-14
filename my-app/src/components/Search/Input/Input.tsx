import React from "react";
import {Props} from "./Input.types";


function Input({value, setValue}: Props) {
    return (
        <input value={value}
               onChange={(e) => setValue(e.target.value)}
               placeholder="Type name, username or email"
               type="text"
        />
    );
}

export default Input;