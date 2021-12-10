import React from 'react'
import Main from '../../components/suggestions/components/main/main.component'
import Sidebar from '../../components/suggestions/components/sidebar/sidebar';
import * as suggestionStyles from './styles.module.scss';
import Menubar from '../../components/suggestions/components/menubar/menubarSuggestions.component';
import Data from "../../assets/data.json";

const Suggestions = () => {

    const {productRequests} = Data;

    return (
    <>  
        <div className={suggestionStyles.suggestionContainer}>
            <div className={suggestionStyles.sidebarContainer}>
                <Sidebar data={productRequests}/>
            </div>
            <div className={suggestionStyles.mainContainer}>
                <Menubar amountOfSuggestions={productRequests.length}/>
                <Main data={productRequests}/>
            </div>
        </div>
    </>

        
    )
}

export default Suggestions;
