const CHECK_STATUS = 'bookstore-react-app/categories/CHECK_STATUS';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.text;
    default:
      return state;
  }
};

export const CheckStatus = () => {
  const status = {
    type: CHECK_STATUS,
    text: 'Under construction',
  };
  return status;
};

export default categoriesReducer;
