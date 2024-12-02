export const parseWaterConsumption = (value) => {
  switch (value) {
    case "none":
      return 0;
    case "1-3":
      return 1;
    case "4-9":
      return 2;
    case "9+":
      return 3;
    default:
      return 0;
  }
};

export const determinePurchasePoints = (purchases) => {
  switch (purchases) {
    case "0-10":
      return 1;
    case "11-50":
      return 3;
    case "51-100":
      return 5;
    case "101+":
      return 10;
    default:
      return 0;
  }
};
