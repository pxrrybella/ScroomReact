import axios from "axios";

const baseURL = 'http://localhost:8080/project';

const getProject = async() => {
    const rest = await axios.get(baseURL+'/Project/isabella345');
    console.log(rest);
    return rest.data;
}

const projectAdd = async (project)  => {
    const rest =  await axios.post(baseURL+"/save", project);
     console.log(rest);
     return rest.data;
}

const projectEdit = async (project) => {
    const rest = await  axios.put(baseURL+"/update",project);
    console.log(rest);
    return rest.data;
}


const projectDelete = async (id) => {
    const rest = await  axios.delete(baseURL+"/delete/"+ id);
    console.log(rest);
    
}




export { getProject,projectAdd, projectEdit,projectDelete}