import React from 'react'
import * as inputStyles from "./input.module.scss";
import { useFormContext } from "react-hook-form";

function Input({rows,heading,type}) {
    const methods = useFormContext();

    if(type==="textarea") {
        return (
            <>
                <div
                className={inputStyles.container}
                >
                    {heading}
                    <textarea
                    {...methods.register("shalalal")} 
                    className={inputStyles.customInput}
                    rows = {rows}
                    />
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
                    {...methods.register("shalalal")} 
                    className={inputStyles.customInput}
                    rows = {rows}
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>                    
                </div>
            </>
        )
    }
}

export default Input