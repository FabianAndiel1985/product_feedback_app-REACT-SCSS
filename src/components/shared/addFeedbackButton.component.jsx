import CustomButton from "./button.component";
import { darkViolet, brightViolet } from "../../constants/color.constants";

const AddFeedbackButton = ()=> {
    
    return (
        <>
            <CustomButton 
                text={"+ Add Feedback"}
                color={darkViolet}
                hoverColor={brightViolet}
                link={"/new-feedback"}
            />
        </> 
    )
}

export default AddFeedbackButton;
