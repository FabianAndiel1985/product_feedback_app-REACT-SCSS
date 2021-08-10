import React, { useState, useEffect } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import * as customDropdownClass from "./CustomDropdown.module.scss";

const CustomDropdown = () => {

    const [sortingCriteria, setSortingCriteria] = useState("Most Upvotes")
    
    const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 2,
              width: "100%"
          }}
      />
  );

      const clickHandler = (e)=>{
        setSortingCriteria((prevState)=>e.target.innerHTML);
      }

  const CheckSymbol = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" stroke-width="2" d="M1 5.233L4.522 9 12 1"/></svg>;
  
  return (
    <div className={customDropdownClass.dropDownList}>
      <div className={customDropdownClass.dropDownList_textRow}>
        <div 
          className={customDropdownClass.dropDownList_textRow_text}
          onClick={clickHandler}
        >
          Most Upvotes
        </div> 
        <div 
          className={customDropdownClass.dropDownList_textRow_symbol}
          >
          {sortingCriteria == "Most Upvotes" ? CheckSymbol : ""}
        </div>
      </div>
      <ColoredLine color={"black"}/>
      <div className={customDropdownClass.dropDownList_textRow}> 
        <div className={customDropdownClass.dropDownList_textRow_text}
             onClick={clickHandler}>
          Least Upvotes
        </div> 
        <div className={customDropdownClass.dropDownList_textRow_symbol}>
          {sortingCriteria == "Least Upvotes" ? CheckSymbol : ""}
        </div>
      </div>
      <ColoredLine color={"black"}/>
      <div className={customDropdownClass.dropDownList_textRow}>
         <div className={customDropdownClass.dropDownList_textRow_text}
              onClick={clickHandler}
         >
            Most Comments
          </div> 
          <div className={customDropdownClass.dropDownList_textRow_symbol}>
            {sortingCriteria == "Most Comments" ? CheckSymbol : ""}
          </div>
      </div>
      <ColoredLine color={"black"}/>
      <div className={customDropdownClass.dropDownList_textRow}>
         <div className={customDropdownClass.dropDownList_textRow_text}
              onClick={clickHandler}
         >
            Least Comments
          </div> 
          <div className={customDropdownClass.dropDownList_textRow_symbol}>
            {sortingCriteria == "Least Comments" ? CheckSymbol : ""}
          </div>
      </div>
      <ColoredLine color={"black"}/>
    </div>
  );
};

export default  CustomDropdown; 


