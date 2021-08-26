import React from 'react'
import Main from './components/main/main'
import Sidebar from './components/sidebar/sidebar';
import * as suggestionStyles from './suggestions.module.scss';
import Menubar from './components/menubar/menubar';
import Data from "../../assets/data.json";

const Suggestions = () => {
    const {productRequests} = Data;

    return (
        <div className={suggestionStyles.suggestionsContainer}>
            <div className={suggestionStyles.suggestionsContainer__sidebar}>
                <Sidebar data={productRequests}/>
            </div>
            <div className={suggestionStyles.suggestionsContainer__main}>
                <Menubar data={productRequests.length}/>  
                <Main data={productRequests}/>
            </div>
        </div> 
    )
}

export default Suggestions;
