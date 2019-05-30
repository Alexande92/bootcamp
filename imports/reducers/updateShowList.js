const updateShowList = (state, action) => {
  if (state === undefined) {
    return {
      shows: [],
      loading: true,
    };
  }

  switch (action.type) {
    case 'FETCH_SHOWS_REQUEST':
      return {
        shows: [],
        loading: true,
      };
    case 'FETCH_SHOWS_SUCCESS':
      return {
        shows: action.payload,
        loading: false,
      };
    case 'FETCH_SHOWS_FAILURE':
      return {
        shows: [],
        loading: false,
      };
    default:
      return state.showList;
  }
};

export default updateShowList;