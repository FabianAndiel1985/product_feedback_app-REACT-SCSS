export const substitueDash = (stringToModify) =>{
    let dashIndex=null;
    let textArray = Object.assign([], stringToModify);
    for (let i = 0; i < textArray.length; i++) {
        if(textArray[i] === "-"){
            dashIndex = i;
           
        }
    }
    textArray.splice(dashIndex,1);
    textArray[dashIndex] = textArray[dashIndex].toUpperCase();
    return textArray.join("")
}

export const splitIntoCategories = (data,criterias)=>{
    let splittedObj= {};
    criterias.forEach((criteria)=>{
        if(criteria.indexOf("-") >= 0){
            let modifiedCriteria = substitueDash(criteria)
            splittedObj[modifiedCriteria] = data.filter((item)=>item.status === `${criteria}`)
        }
        else {
            splittedObj[criteria] = data.filter((item)=>item.status === `${criteria}`)
        }
    })
    return splittedObj
}

export const countOcc = (data) =>{
    let occurencesCount = {}
    for (const [key, value] of Object.entries(data)) {
        occurencesCount[key] = value.length
      }
    return occurencesCount;
}