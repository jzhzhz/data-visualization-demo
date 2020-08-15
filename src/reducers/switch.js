const switchReducer = (state = "product", action) => {
  switch(action.type) {
    case "PRODUCT":
      return "product";
    case "DISTRICT":
      return "district";
    default:
      return state;
  }
};

export default switchReducer;