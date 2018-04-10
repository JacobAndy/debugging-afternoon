import axios from "axios";

export const productsController = function() {
  return axios
    .get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
};
