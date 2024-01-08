import axios from "axios"

export default class ProductService {
    async getProducts() {
        const response =await axios.get("https://dummyjson.com/products");
        return response;

  }
}