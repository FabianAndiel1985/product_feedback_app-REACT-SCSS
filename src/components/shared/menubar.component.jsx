import * as menubarStyles from "./menubar.module.scss";
import CustomButton from "./button";
import {brightVioletColor} from "../../constants/color-constants";

function Menubar({children}) {

       return (
        <div className={menubarStyles.firstSection}>
            <div>
                {children}
            </div>

                 <CustomButton 
                 text={"+ Add Feedback"}
                 color={brightVioletColor}
                 hoverColor={"#c75af6"}
                 link={"/new-feedback"}
             /> 
        </div>
    )
}

export default Menubar
