import updateShowList from 'updateShowList';

const reducer = (state, action) => ({
  showList: updateShowList(state, action),
});

export default reducer;
