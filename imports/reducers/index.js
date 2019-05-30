import sortShowList from './sortShowList';

const reducer = (state, action) => ({
  sorting: sortShowList(state, action),
});

export default reducer;
