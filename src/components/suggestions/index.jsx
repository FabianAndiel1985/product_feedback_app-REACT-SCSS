import React from 'react'
import Main from './components/main/main'
import Sidebar from './components/sidebar/sidebar';
import * as suggestionStyles from './suggestions.module.scss';

const Suggestions = () => {
    return (
        
        <div className={suggestionStyles.suggestionsContainer}>
            {/* eventually ommit the div */}
            <div className={suggestionStyles.suggestionsContainer__sidebar}>
                <Sidebar/>
            </div>
            {/* eventually ommit this div */}
            <div className={suggestionStyles.suggestionsContainer__main}>
                <Main/>
            </div>
        </div>
        
    )
}

export default Suggestions;
