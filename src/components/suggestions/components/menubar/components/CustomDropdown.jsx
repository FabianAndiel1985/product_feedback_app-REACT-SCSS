import React, { useState } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { Dropdown } from "primereact/dropdown";




const CustomDropdown = () => {
  const [category, setCategory] = useState(null);

  const categories = [
    { name: "Most upvotes"},
    { name: "Least upvotes"},
    { name: "Most comments"},
    { name: "Least comments"}
  ];

  useEffect(() => {
      effect
      return () => {
          cleanup
      }
  }, [input])


  const onCategoryChange = (e) => {
    console.log(e.value.name); 
    setCategory(e.value.name);
  };

  return (
    <div className="card">
      <h5>Basic</h5>
      <Dropdown
        value={selectedCity1}
        options={cities}
        onChange={onCityChange}
        optionLabel="name"
        placeholder="Select a City"
      />
    </div>
  );
};

export default  CustomDropdown; 


