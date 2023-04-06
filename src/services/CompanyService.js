import axios from "axios";

const baseURL = 'http://localhost:8080/company';

const companyGetAll = async(company) => {
    const rest = await axios.get(baseURL + '/findAll');
    return rest.data;
}
export {companyGetAll}