import * as LongWhiteBoxStyles from "./LongWhiteBox.module.scss";
import Pill from '../../sidebar/components/pill';
import Counter from "./Counter";



function LongWhiteBox() {

    const SpeechBubble = <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"/></svg>;

    return (

        <>

        <div className={LongWhiteBoxStyles.LongWhiteBox}>
            <div className={LongWhiteBoxStyles.LongWhiteBox__firstFlexItem}>
                <div className={LongWhiteBoxStyles.LongWhiteBox__firstFlexItem__counter}>
                        <Pill text={""} orientation={"vertical"} width={20}>
                            <Counter number={0}/>
                        </Pill>
                </div>
                <div className={LongWhiteBoxStyles.LongWhiteBox__firstFlexItem__text}>
                    <h3 style={{margin:"0px"}}>Add Text</h3>
                    <p style={{margin:"0.1em"}}>Easier to search</p>
                    <Pill text={"really cool"} orientation={"horizontal"}/>
                </div>   
            </div>

            <div className={LongWhiteBoxStyles.LongWhiteBox__secondFlexItem}>
                <div className={LongWhiteBoxStyles.LongWhiteBox__secondFlexItem__container}>
                    {SpeechBubble}
                    <div>number</div>
                </div>
            </div>
        </div>

        </>
    )
}

export default LongWhiteBox
