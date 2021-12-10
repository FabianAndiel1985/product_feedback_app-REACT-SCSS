import React, { useState } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import * as customDropdownClass from "./customDropdown.module.scss";
import {CheckSymbol} from "../../../../../constants/icons.constants";
import ColoredLine from "./coloredLine.component";


const CustomDropdown = ({onSortCategoryChange}) => {

    const [sortingCriteriaComp, setSortingCriteriaComp] = useState("Most Upvotes")
    
    const setSortingCriteriaCompAndParent = (e)=>{
      const sortCategory = e.target.innerHTML;
      onSortCategoryChange(sortCategory)
      setSortingCriteriaComp(sortCategory)
    }

  return (
    <div className={customDropdownClass.dropDownList}>
      <div className={customDropdownClass.dropDownList_textRow}>
        <div 
          className={customDropdownClass.dropDownList_textRow_text}
          onClick={setSortingCriteriaCompAndParent}
        >
          Most Upvotes
        </div> 
        <div 
          className={customDropdownClass.dropDownList_textRow_symbol}
          >
          {sortingCriteriaComp == "Most Upvotes" ? CheckSymbol : ""}
        </div>
      </div>
      <ColoredLine color={"black"}/>
      <div className={customDropdownClass.dropDownList_textRow}> 
        <div className={customDropdownClass.dropDownList_textRow_text}
             onClick={setSortingCriteriaCompAndParent}>
          Least Upvotes
        </div> 
        <div className={customDropdownClass.dropDownList_textRow_symbol}>
          {sortingCriteriaComp == "Least Upvotes" ? CheckSymbol : ""}
        </div>
      </div>
      <ColoredLine color={"black"}/>
      <div className={customDropdownClass.dropDownList_textRow}>
         <div className={customDropdownClass.dropDownList_textRow_text}
              onClick={setSortingCriteriaCompAndParent}
         >
            Most Comments
          </div> 
          <div className={customDropdownClass.dropDownList_textRow_symbol}>
            {sortingCriteriaComp == "Most Comments" ? CheckSymbol : ""}
          </div>
      </div>
      <ColoredLine color={"black"}/>
      <div className={customDropdownClass.dropDownList_textRow}>
         <div className={customDropdownClass.dropDownList_textRow_text}
              onClick={setSortingCriteriaCompAndParent}
         >
            Least Comments
          </div> 
          <div className={customDropdownClass.dropDownList_textRow_symbol}>
            {sortingCriteriaComp == "Least Comments" ? CheckSymbol : ""}
          </div>
      </div>
    </div>
  );
};

export default  CustomDropdown; 


