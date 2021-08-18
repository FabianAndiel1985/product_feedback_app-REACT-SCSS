import Pill from "./components/pill";
import * as sidebarStyles from "./sidebar.module.scss";

const Sidebar = () => {
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
              <Pill text={"All"} orientation={"horizontal"}/>
              <Pill text={"UI"} orientation={"horizontal"}/>  
              <Pill text={"UX"} orientation={"horizontal"}/>  
          </div>

          <div>
            <Pill text={"Enhancement"} orientation={"horizontal"}/>
            <Pill text={"Bug"} orientation={"horizontal"} />  
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
