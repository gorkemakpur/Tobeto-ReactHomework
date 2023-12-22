import axios from "axios"

export default class ProductService
{
    getProducts(){
        //apiye request atıyoruz verileri getiriyoruz
        return axios.get("https://localhost:44340/api/AnnouncementTypes/GetList")
    }
}