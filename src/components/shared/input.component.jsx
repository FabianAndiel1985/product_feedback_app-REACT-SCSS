import React from 'react'
import * as inputStyles from "./input.module.scss";
import { useFormContext } from "react-hook-form";

function Input({rows,heading,type,name}) {
    const methods = useFormContext();

    const { formState: { errors }} = methods;

    let warningMessage =  null;
    
    if(name in errors && errors[name].type === "required" ) {
        warningMessage =   `Feedback ${name} can\`t be empty`;
    }

    if(type==="textarea") {
        return (
            <>
                <div
                className={inputStyles.container}
                >
                    {heading}
                    <textarea
                    {...methods.register(name,{ required: true })} 
                    className={inputStyles.customInput}
                    rows = {rows}
                    />
                    <span
                     className={inputStyles.warningMessage}
                    >
                        {warningMessage}
                    </span>

                </div>

            </>
        )
    }

    else if (type==="select") {
        return (
            <>
                <div
                className={inputStyles.container}
                >
                    {heading}

                    <select 
                    name="pets" 
                    id="pet-select"
                    {...methods.register(name)} 
                    className={inputStyles.customInput}
                    rows = {rows}
                    >
                        <option value="Feature">Feature</option>
                        <option value="UI">UI</option>
                        <option value="UX">UX</option>
                        <option value="Enhancement">Enhancement</option>
                        <option value="Bug">Bug</option>
                    </select>                    
                </div>
            </>
        )
    }
}

export default Input