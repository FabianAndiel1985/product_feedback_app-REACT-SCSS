import React from "react";
import * as styles from "./categorySwitch.module.scss";
import ColorStripe from "../shared/colorStripe.jsx";

const categorySwitch = ({categories, click})=>{



    const categorySwitchContent = Object.entries(categories).map(([key,value], i) => {
        return (
          <>
          <div 
          className={styles.categoryBox}
          onClick={()=>{
            if(click) {
              click(key)
            }
          }}
          >
              <h3>
                  {key} ( {value} )
              </h3>
            <ColorStripe
            status={key}
            />
          </div>
            
          </>
        );
      });

return(
    <>
    <div
    className={styles.switchContainer}
    >
        {categorySwitchContent}
        
    </div>
    </>
    )
}


export default categorySwitch;