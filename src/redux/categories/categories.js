const initialState = [];
const CHECK_STATUS = 'react-bookstore/category/checkStatus';

const statusChecker = () => ({
  type: CHECK_STATUS,
});

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export { statusChecker };
export default statusReducer;
