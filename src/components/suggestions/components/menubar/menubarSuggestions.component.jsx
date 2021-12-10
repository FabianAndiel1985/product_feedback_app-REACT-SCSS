import * as menubarStyles from "./menubarSuggestions.module.scss";
import CustomDropdown from "./components/customDropwdown.component.jsx";
import { useState } from "react";
import { useDispatch} from 'react-redux'
import Menubar from "../../../shared/menubar.component";
import {SuggestionIcon} from "./../../../../constants/icons.constants"


function MenubarSuggestions({amountOfSuggestions}) {

    const [sortingCriteria, setSortingCriteria] = useState("Most Upvotes")
    const [showDropdown, setshowDropdown] = useState(false)
    
    const dispatch = useDispatch()

    const handleSortChange = (sortCategory)=>{
        setSortingCriteria(sortCategory);
        dispatch({type:sortCategory});
    }

    const toggleDropdown = ()=>{
        setshowDropdown((prevState)=> !prevState)
    }

       return (
           <Menubar>
               <span
               className={menubarStyles.firstItem}
               >
        
                <div className={menubarStyles.symbol}>
                        {SuggestionIcon} 
                </div>

                    <div className={menubarStyles.amountOfSuggestions}>
                        <div>
                        {amountOfSuggestions}
                        </div>
                        <div  className={menubarStyles.amountOfSuggestions_text}>
                            Suggestions
                        </div>
                    </div>
                 </span>
                 <div className={menubarStyles.sortingCategory}
                      onClick={toggleDropdown}   
                 >
                     <span className={menubarStyles.sortBy}>
                         Sort by:
                     </span>
                     <span>
                         {sortingCriteria}
                     </span>
                 </div>

                { showDropdown && 
                     <CustomDropdown
                         onSortCategoryChange={handleSortChange} 
                     />
                 }
           </Menubar>
    )
}

export default MenubarSuggestions
