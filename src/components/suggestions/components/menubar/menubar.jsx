import * as menubarStyles from "./menubar.module.scss";
import CustomButton from "../../../shared/button";

function Menubar() {
    return (
        <div className={menubarStyles.firstSection}>
            <div>
                Symbol 

                Anzahl der Suggestions

                Sort by:
                {/* Sort by:
                Most upvotes
                Least upvotes
                Most comments
                Least comments */}
            </div>
            
            <CustomButton 
            text={"&#43; Add Feedback"}
            color={"#ad1fea"}
            />             
        </div>
    )
}

export default Menubar
