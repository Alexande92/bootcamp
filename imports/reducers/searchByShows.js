const searchByShows = (state, action) =>{
  if (action.type === 'SEARCH_BY_SHOWS') {
    return {
      ...state.search,
      phrase: action.payload,
    };
  }

  return state.search;
};

export default searchByShows;
