import React from "react";
import { useEffect, useState } from "react";
import { userwebGetAll } from "../services/UserwebService";

const TableMembers = ({ userProject }) => {
    const [userList, setUserList] = useState([]);

    const getAll = async () => {
        await userwebGetAll();
        setUserList(await userwebGetAll());
    }

    useEffect(() => {
        getAll();
    }, [])

    return (
        <div className='col-8 col-3 m-3 text-center d-flex flex-column align-items-center mx-auto'>
            <h2>Lista de miembros del proyecto</h2>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre de usuario</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {userProject.map(userProject => (
                        <tr>
                            <td scope="row">{userProject}</td>
                            <td>{userList.map(user => user.userweb_id == userProject ? (<p>{user.user_name}</p>) : (<></>))}</td>
                            <td>{userList.map(user => user.userweb_id == userProject ? (<p>{user.first_name}</p>) : (<></>))}</td>
                            <td>{userList.map(user => user.userweb_id == userProject ? (<p>{user.last_name}</p>) : (<></>))}</td>
                            <td>{userList.map(user => user.userweb_id == userProject ? (<p>{user.email}</p>) : (<></>))}</td>
                            <td>
                                <button type="button" class="btn btn-danger ms-2">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableMembers;