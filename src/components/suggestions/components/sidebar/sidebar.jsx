import Pill from "./components/pill";
import * as sidebarStyles from "./sidebar.module.scss";
import {handleFilterCriteriaChange} from '../main/sortingService';
import { useHistory } from "react-router-dom";
import { splitIntoCategories,countOcc } from "./sidebar.services";
import { categories } from "../../../../constants/categories.constants";


const Sidebar = ({data}) => {
    
    const history = useHistory();

    let splitedObj = splitIntoCategories(data,["planned","in-progress","live"]);

    const linkFurtherHandler = ()=>{
        history.push('/roadmap');
    }

    let occurences = countOcc(splitedObj);

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
