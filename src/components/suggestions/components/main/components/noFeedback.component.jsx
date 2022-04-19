import * as noFeedbackStyles from "./NoFeedback.module.scss";
import AddFeedbackButton from "../../../../shared/addFeedbackButton.component";

const NoFeedback = ({illustration})=> {

    return (
        <div className={noFeedbackStyles.component_styles}>
            {illustration}
            <h1>There is no feedback yet.</h1>
            <p>
                 Got a suggestion? Found a bug that needs to be squashed?
                <br/>
                We love hearing about new ideas to improve our app.
            </p>
            <AddFeedbackButton/>
        </div>
    )
}

export default NoFeedback;
