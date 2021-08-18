const initialState = {
  sortingCriteria: "Most Upvotes"
};

function reducer(state = initialState, action) {
switch(action.type) {
  case "Most Upvotes":
    return {
        sortingCriteria: "Most Upvotes"
    };
    case "Least Upvotes":
        return {
            sortingCriteria: "Least Upvotes"
        };
        case "Most Comments":
        return {
                sortingCriteria: "Most Comments"
        };
        case "Least Comments":
        return {
                sortingCriteria: "Least Comments"
        };
  default:
    return state;
  }
}
export default reducer;