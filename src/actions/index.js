export const changeToProduct = (num) => {
  return {
    type: "PRODUCT",
    payload: num
  };
};

export const changeToDistrict = (num) => {
  return {
    type: "DISTRICT",
    payload: num
  };
};