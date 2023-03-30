import React from "react";

const Survey = () => {
    return (
        <div className="col-sm-7 mt-5 mb-5">
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Encuesta Sprint 1</h5>
                    <blockquote class="blockquote">
                        <p>¿Qué tan estresado te has sentido en este Sprint?</p>
                        <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-dark">1</button>
                            <button type="button" class="btn btn-dark">2</button>
                            <button type="button" class="btn btn-dark">3</button>
                            <button type="button" class="btn btn-dark">4</button>
                            <button type="button" class="btn btn-dark">5</button>
                        </div>
                    </blockquote>
                    {/* <figcaption class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption> */}
                    <blockquote class="blockquote">
                        <p>¿Qué tan motivado te has sentido en este Sprint?</p>
                        <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-dark">1</button>
                            <button type="button" class="btn btn-dark">2</button>
                            <button type="button" class="btn btn-dark">3</button>
                            <button type="button" class="btn btn-dark">4</button>
                            <button type="button" class="btn btn-dark">5</button>
                        </div>
                    </blockquote>
                    <blockquote class="blockquote">
                        <p>Los líderes animan a que los demas entreguen opiniones distintas a las suyas</p>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button type="button" class="btn btn-dark">Muy en desacuerdo</button>
                            <button type="button" class="btn btn-dark">En desacuerdo</button>
                            <button type="button" class="btn btn-dark">Neutro</button>
                            <button type="button" class="btn btn-dark">De acuerdo</button>
                            <button type="button" class="btn btn-dark">Muy de acuerdo</button>
                        </div>
                    </blockquote>
                    <blockquote class="blockquote">
                        <p>Todos reciben un trato respetuoso y digno</p>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button type="button" class="btn btn-dark">Muy en desacuerdo</button>
                            <button type="button" class="btn btn-dark">En desacuerdo</button>
                            <button type="button" class="btn btn-dark">Neutro</button>
                            <button type="button" class="btn btn-dark">De acuerdo</button>
                            <button type="button" class="btn btn-dark">Muy de acuerdo</button>
                        </div>
                    </blockquote>
                    <blockquote class="blockquote">
                        <p>Tengo suficiente tiempo para terminar con mi trabajo en la jornada</p>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button type="button" class="btn btn-dark">Muy en desacuerdo</button>
                            <button type="button" class="btn btn-dark">En desacuerdo</button>
                            <button type="button" class="btn btn-dark">Neutro</button>
                            <button type="button" class="btn btn-dark">De acuerdo</button>
                            <button type="button" class="btn btn-dark">Muy de acuerdo</button>
                        </div>
                    </blockquote>
                    <button type="button" class="btn btn-primary">Enviar</button>
                </div>
            </div>
        </div>
    )
}
export default Survey;