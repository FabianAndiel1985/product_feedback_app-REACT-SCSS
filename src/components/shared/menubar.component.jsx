import * as menubarStyles from "./menubar.module.scss";
import AddFeedbackButton from "./addFeedbackButton.component";

function Menubar({children}) {

       return (
        <div className={menubarStyles.firstSection}>
            <div>
                {children}
            </div>

            <AddFeedbackButton />
        </div>
    )
}

export default Menubar
