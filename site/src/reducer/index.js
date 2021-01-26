const initialState = {
  list: [
    {
      name: "Carl",
      vin: "vwxs2323232323",
      status: 0,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTO_TO_QUEUE":
      return {
        ...state,
        list: [...state.list, action.newAuto],
      };
    case "CHANGE_STATUS_AUTO":
      const currentList = [...state.list];
      currentList[action.indexAuto].status = currentList[action.indexAuto]
        .status
        ? 0
        : 1;
      return {
        ...state,
        list: currentList,
      };
    default:
      return state;
  }
};

export default reducer;
