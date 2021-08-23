import React from 'react'
import { useDispatch } from 'react-redux';
import * as pillStyles from "./pill.module.scss" 
import { handleFilterCriteriaChange } from '../../main/sortingService';


const Pill = ({text,orientation,children})=> {

    const dispatch = useDispatch()
    let pillClass =  orientation === "horizontal" ? pillStyles.pillHorizontal : pillStyles.pillVertical;

    return (
        <>
        { children ?

            <div 
            className={pillClass}
            >
                {children}
            </div>
            :
            <div 
            className={pillClass}
            onClick={()=>handleFilterCriteriaChange(`${text[0].toUpperCase()}${text.slice(1)}`,dispatch)}
            >
                <span>{text}</span>
            </div>
        }
        </>
    )
}

export default Pill;
