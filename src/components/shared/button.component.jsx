import { useState} from "react";
import { useHistory} from "react-router-dom";
import * as customButtonStyles from "./button.module.scss";


function CustomButton({text,color,hoverColor,link,type}) {
    
    const [bgColor, setBgColor] = useState(color)
    let history = useHistory()
    
    const handleMouseEnter= ()=>{
        if (hoverColor) {
            setBgColor(hoverColor)
        }
    }

    const handleMouseLeave= ()=>{
        setBgColor(color)
    }

    const routeFurther = ()=>{
            history.push(link);
    }

    return (

        <button className={customButtonStyles.buttonStyle}
            style={{backgroundColor:bgColor}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={link && routeFurther}
            type={type && type}
        >
            {text}
        </button>

    )
}

export default CustomButton
