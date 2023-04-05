import React from "react";

const TableMembers = () => {
    return (
        <div className='col-8 col-3 m-3 text-center d-flex flex-column align-items-center mx-auto'>
            <h2>Lista de miembros del proyecto</h2>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre de usuario</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Editar/Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre de usuario</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Email</td>
                        <td>
                            <button type="button" class="btn btn-warning">Editar</button>
                            <button type="button" class="btn btn-danger ms-2">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableMembers;