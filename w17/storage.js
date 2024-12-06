export const saveLS = (data) => localStorage.setItem("cfp", JSON.stringify(data));
export const getLS = () => JSON.parse(localStorage.getItem("cfp")) || [];
export const cfpData = getLS();
