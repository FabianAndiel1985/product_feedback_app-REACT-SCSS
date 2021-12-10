import { useState } from "react";
import Pill from "./components/pill";
import * as sidebarStyles from "./sidebar.module.scss";
import {handleFilterCriteriaChange} from '../main/sorting.service';
import { useHistory } from "react-router-dom";
import { splitIntoCategories,countOcc } from "./sidebar.services";
import { categories } from "../../../../constants/categories.constants";
import RoadmapBox from "./components/roadmapBox.component";
import PillBox from "./components/pillBox.component";
import MobileSidebar from "./components/mobileSidebar.component";
import useWindowDimensions from "../../../../helpers/getWindowDimensions.hook";
import { mqTabletMin } from "../../../../constants/sizes.constants.js";
import { HamburgerIcon, CloseIcon } from "../../../../constants/icons.constants.js";

const Sidebar = ({data}) => {

  const {width} = useWindowDimensions();
    
    const [isOpen, setIsOpen] = useState(false)
    
    const history = useHistory();

    let splitedObj = splitIntoCategories(data,["planned","in-progress","live"]);

    const linkFurtherHandler = ()=>{
        history.push('/roadmap');
    }

    let occurences = countOcc(splitedObj);

    const toggelPanel = ()=>{
        setIsOpen((previousState)=>!previousState)
    }

    const listBody = Object.entries(occurences).map(([key,value], i) => {
        return (
          <li key={i}>
            {key} {value}
          </li>
        );
      });

      const pills = categories.map((item) => {
        return (
            <Pill 
                text={item} 
                orientation={"horizontal"}
                setFilterCriteria={handleFilterCriteriaChange}
              />
        );
      });

    return (
        <>

        <div className={sidebarStyles.sidebarGradient}>
            <p>
                Fabian`s <br/>
                Feedback Board 
            </p>

            {
              isOpen ? 
              <span
              onClick={toggelPanel}
              >
              {CloseIcon}
              </span>
              : 
              <span onClick={toggelPanel}>
                {HamburgerIcon}
              </span>
            }
        </div>

      {isOpen
      
       &&  
       <MobileSidebar>

        <RoadmapBox
          click={linkFurtherHandler}
        >
            {listBody}
        </RoadmapBox>

        <PillBox>
          {pills}
        </PillBox>
        
       </MobileSidebar>
      }

      
            
    {occurences && width >= mqTabletMin ?
    <>
      <PillBox>
        {pills}
      </PillBox>

        <RoadmapBox
          click={linkFurtherHandler}
        >
            {listBody}
        </RoadmapBox>
      </>
        : null }


        </>
    )
  }

export default Sidebar;
