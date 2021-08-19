export const sortData = (sortingCriteria,data) => {
    if(sortingCriteria === "Most Upvotes" ) {
      return  [...data].sort((a,b)=>a.upvotes-b.upvotes).reverse();
    }
    else if (sortingCriteria === "Least Upvotes" ) {
      return  [...data].sort((a,b)=>a.upvotes-b.upvotes);
    }
    else if (sortingCriteria === "Most Comments" ) {    
        return sortTheComments(data,"ascending")
    }
    else if (sortingCriteria === "Least Comments" ) {
        return sortTheComments(data,"descending")
    }
}

export const sortTheComments = (data,sorting)=>{
    const withComments = data.filter((item)=>item.comments)
    const withoutComments = data.filter((item)=> !item.comments)
    withComments.sort((a,b)=>a.comments.length-b.comments.length)
    if(sorting ==="ascending"){
        withComments.reverse()
        return  [...withComments, ...withoutComments]
    }
    return  [...withoutComments,...withComments]
}