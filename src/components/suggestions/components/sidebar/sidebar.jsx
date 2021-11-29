import { useState } from "react";
import Pill from "./components/pill";
import * as sidebarStyles from "./sidebar.module.scss";
import {handleFilterCriteriaChange} from '../main/sortingService';
import { useHistory } from "react-router-dom";
import { splitIntoCategories,countOcc } from "./sidebar.services";
import { categories } from "../../../../constants/categories.constants";


const Sidebar = ({data}) => {
    
    const [isOpen, setIsOpen] = useState(false)
    
    const history = useHistory();

    let splitedObj = splitIntoCategories(data,["planned","in-progress","live"]);

    const linkFurtherHandler = ()=>{
        history.push('/roadmap');
    }

    let occurences = countOcc(splitedObj);

    const HamburgerIcon = <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"/></g></svg>;
    const CloseIcon = <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z" fill="#FFF" fill-rule="evenodd"/></svg>

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

      <div className={sidebarStyles.sidebarWhiteFirst}>
          {pills}
      </div>
      
      
      {occurences &&
      <div className={sidebarStyles.sidebarWhiteSecond}> 
            <div> 
                    <span>Roadmap</span> 
                    <a 
                    onClick={linkFurtherHandler}
                    >View</a>
            </div>

            <ul>
                {listBody}
            </ul>         
        </div> 

        }
        </>
    )
}

export default Sidebar;
