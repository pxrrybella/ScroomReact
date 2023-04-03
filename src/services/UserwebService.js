import axios from "axios";

const baseURL = 'http://localhost:8080/userweb';

const getUserwebFirstLastName = async() => {
    const rest = await axios.get(baseURL+'/firstlastname/yago123');
    console.log(rest);
    return rest.data;
}


export { getUserwebFirstLastName }