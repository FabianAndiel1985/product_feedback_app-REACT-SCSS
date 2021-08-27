import React from 'react'
import Main from './components/main/main'
import Sidebar from './components/sidebar/sidebar';
import * as suggestionStyles from './styles.module.scss';
import Menubar from './components/menubar/menubar';
import Data from "../../assets/data.json";

const Suggestions = () => {
    const {productRequests} = Data;

    return (
    <>  
        <div className={suggestionStyles.suggestionContainer}>
            <div className={suggestionStyles.sidebarContainer}>
                <Sidebar data={productRequests}/>
            </div>
            <Menubar data={productRequests.length}/>
            <Main data={productRequests}/>
        </div>
    </>

        
    )
}

export default Suggestions;
