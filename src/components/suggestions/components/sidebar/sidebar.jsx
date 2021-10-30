import { useState } from "react";
import Pill from "./components/pill";
import * as sidebarStyles from "./sidebar.module.scss";
import { useDispatch} from 'react-redux'
import {handleFilterCriteriaChange} from '../main/sortingService';


const Sidebar = ({data}) => {
    
    const dispatch = useDispatch();

    const countOccurrences = (data,criteria1,criteria2,criteria3)=>{
            return {
                planned: data.filter((item)=>item.status === `${criteria1}`).length,
                inProgress: data.filter((item)=>item.status === `${criteria2}`).length,
                live:data.filter((item)=>item.status === `${criteria3}`).length
            }
    }
    
    let occurences = countOccurrences(data,"planned","in-progress","live");

    return (
        <>

        <div className={sidebarStyles.sidebarGradient}>
            <p>
                Fabian`s <br/>
                Feedback Board 
            </p>
        </div>

      <div className={sidebarStyles.sidebarWhiteFirst}>
       
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
            <Pill 
            text={"Feature"} 
            orientation={"horizontal"}
            setFilterCriteria={handleFilterCriteriaChange}
            />  
      </div>
      
      
      {occurences &&
      
      <div className={sidebarStyles.sidebarWhiteSecond}> 
            
            <div> 
                    <span>Roadmap</span> 
                    <a href="">View</a>
            </div>

            <ul>
                <li className="sidebarStyles.sidebarWhite__liFirst">
                    <span>Planned</span> 
                    <span> {occurences.planned} </span>
                </li>
                <li className="sidebarStyles.sidebarWhite__liSecond">
                    <span>In-Progress</span> 
                    <span> {occurences.inProgress} </span>
                </li>
                <li className="sidebarStyles.sidebarWhite__liThird">
                    <span>Live</span> 
                    <span>{occurences.live}</span>
                </li>
            </ul>         
        </div> 

        }
        </>
    )
}

export default Sidebar;
