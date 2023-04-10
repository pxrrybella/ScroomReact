import axios from "axios";

const baseURL = 'http://localhost:8080/userwebproject';

const getProjectsByUsername = async (user)  => {
    user = 'isabella345'
    const rest =  await axios.get(baseURL+"/projectsByUserweb/"+user);
     console.log(rest);
     return rest.data;
}

export { getProjectsByUsername }