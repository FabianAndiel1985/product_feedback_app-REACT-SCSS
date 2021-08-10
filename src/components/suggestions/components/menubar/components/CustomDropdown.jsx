import React, { useState, useEffect } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./CustomDropdown.css"

const CustomDropdown = () => {

    const [sortingCriteria, setSortingCriteria] = useState("Most Upvotes")
  
  return (
    <div className="custom-select" style={{width:"200px",height:"10px"}}>
      <select>
        <option value="0">Select car:</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
      </select>
    </div>
  );
};

export default  CustomDropdown; 


