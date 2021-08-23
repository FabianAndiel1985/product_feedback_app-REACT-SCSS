const initialState = {
  sortingCriteria: "Most Upvotes"
};

function reducer(state = initialState, action) {
switch(action.type) {
  case "All":
    return {
        sortingCriteria: "All"
    };
    case "UI":
      return {
          sortingCriteria: "UI"
      };
      case "UX":
        return {
            sortingCriteria: "UX"
        };
        case "Enhancement":
          return {
              sortingCriteria: "Enhancement"
          };
      case "Bug":
        return {
            sortingCriteria: "Bug"
        };
        case "Feature":
        return {
            sortingCriteria: "Feature"
        };
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