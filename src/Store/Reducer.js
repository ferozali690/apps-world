import data from "../JsonData/Data.json";

const userJson = data.user;
const initialState = {
  dataJson: userJson,
};

const Reducer = (state = initialState, action) => {
  return {
    ...state,
  };
};

export default Reducer;
