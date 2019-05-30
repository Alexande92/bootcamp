const sortByColumn = (state, action) => {
  const newState = { ...state.sorting };

  if (newState.name !== action.payload) {
    return {
      order: -1,
      name: action.payload,
    };
  }

  newState.order *= -1;

  return newState;
};

const sortShowList = (state, action) => {
  if (state === undefined) {
    return {
      name: 'watchers',
      order: -1,
    };
  }

  return action.type === 'SORT_BY_COLUMN' ? sortByColumn(state, action)
    : state.sorting;
};

export default sortShowList;
