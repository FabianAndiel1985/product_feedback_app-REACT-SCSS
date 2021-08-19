import { useState } from "react";
import Pill from "./components/pill";
import * as sidebarStyles from "./sidebar.module.scss";
import { useSelector, useDispatch} from 'react-redux'


const Sidebar = () => {
    
    const [filterCriteria, setFilterCriteria] = useState("All")
    const dispatch = useDispatch();

    const handleFilterCriteriaChange = (filterCriteria)=>{
            console.log(filterCriteria)
        // setFilterCriteria(filterCriteria);
        // dispatch({type:filterCriteria});
    }



    return (
        <>
        <div className={sidebarStyles.sidebarGradient}>
            <p>
                Fabian`s <br/>
                Feedback Board 
            </p>
        </div>

      <div className={sidebarStyles.sidebarWhiteFirst}>
          <div>
              <Pill 
              text={"All"} 
              orientation={"horizontal"} 
              setFilterCriteria={handleFilterCriteriaChange}
              />
              <Pill 
                text={"UI"} 
                orientation={"horizontal"}
                setFilterCriteria={handleFilterCriteriaChange}
              />  
              <Pill 
                text={"UX"} 
                orientation={"horizontal"}
                setFilterCriteria={handleFilterCriteriaChange}
              />  
          </div>

          <div>
            <Pill 
            text={"Enhancement"} 
            orientation={"horizontal"}
            setFilterCriteria={handleFilterCriteriaChange}
            />
            <Pill 
            text={"Bug"} 
            orientation={"horizontal"} 
            setFilterCriteria={handleFilterCriteriaChange}
            />  
          </div>

          <div>
            <Pill text={"Feature"} orientation={"horizontal"}/>  
          </div>
            
      </div>
      
      <div className={sidebarStyles.sidebarWhiteSecond}> 
            <div> 
                    <span>Roadmap</span> 
                    <a href="">View</a>
            </div>

            <ul>
                <li className="sidebarStyles.sidebarWhite__liFirst">
                    <span>Planned</span> 
                    <span>3</span>
                </li>
                <li className="sidebarStyles.sidebarWhite__liSecond">
                    <span>In-Progress</span> 
                    <span>2</span>
                </li>
                <li className="sidebarStyles.sidebarWhite__liThird">
                    <span>Live</span> 
                    <span>1</span>
                </li>
            </ul>         
        </div> 
        </>
    )
}

export default Sidebar;
