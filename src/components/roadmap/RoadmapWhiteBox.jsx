import  {LongWhiteBox,
         colorStripe_live,
         colorStripe_planned,
         colorStripe_inProgress,
         innerBox,statusDisplay,
         bulletPoint_inProgress,
         bulletPoint_live,
         bulletPoint_planned,
         bottomRow
        } from "./RoadmapWhiteBox.module.scss";
import { useHistory } from "react-router-dom";
import Counter from "../suggestions/components/main/components/Counter";
import Pill from '../suggestions/components/sidebar/components/pill';



const RoadmapWhiteBox = ({title,description,category,status,comments,linkFurther,id}) => {

    const SpeechBubble = <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"/></svg>;

    let history = useHistory();

    const linkFurtherHandler = ()=>{
        history.push(`/feedback/${id}`);
    }
    
    const titlePH = "Testtitel";
    const descriptionPH = " Im doin the descripti ";
    const amountPH = 7;
    const categoryPH= "Feature";

    return (
        <>
       
        <div
            className={LongWhiteBox}
        >
            <div
                className={(status === "in-progress" ? colorStripe_inProgress : (status==="live" ? colorStripe_live :colorStripe_planned))}>
            </div>

            <div
            className={innerBox}
            >
                <ul classname={statusDisplay}>
                    <li
                    className={(status === "in-progress" ? bulletPoint_inProgress: (status==="live" ? bulletPoint_live :bulletPoint_planned))}
                    >
                        <span
                        className={"statusText"}
                        >
                            {status}
                        </span>
                    </li>
                </ul>

                <h3>{title}</h3>
                <p> {description}</p>
                <Pill 
                text={category}
                orientation={"horizontal"}
                />

                <div className={bottomRow}>
                    <Pill
                    text={category}
                    orientation={"horizontal"}
                    > 
                        <Counter orientation={"horizontal"} number={7}/>
                    </Pill>
                    <div>
                        {SpeechBubble}
                        {amountPH}
                    </div>
                </div>
            </div> 

        </div>
        </>
    )
}

export default RoadmapWhiteBox
