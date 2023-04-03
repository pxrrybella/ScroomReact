import React from "react";

const Survey = () => {
    return (
        <div className="col-sm-7 mt-5 mb-5">
            <div class="card text-center mb-3">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item carousel-item-survey active">
                            <h5 class="card-title">Encuesta Sprint 1</h5>
                            <blockquote class="blockquote">
                                <p class="mt-4">¿Qué tan estresado te sentiste en este Sprint?</p>
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-dark">1</button>
                                    <button type="button" class="btn btn-dark">2</button>
                                    <button type="button" class="btn btn-dark">3</button>
                                    <button type="button" class="btn btn-dark">4</button>
                                    <button type="button" class="btn btn-dark">5</button>
                                </div>
                            </blockquote>
                        </div>
                        <div class="carousel-item carousel-item-survey">
                            <blockquote class="blockquote">
                                <p class="mt-5">¿Qué tan motivado te has sentido en este Sprint?</p>
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-dark">1</button>
                                    <button type="button" class="btn btn-dark">2</button>
                                    <button type="button" class="btn btn-dark">3</button>
                                    <button type="button" class="btn btn-dark">4</button>
                                    <button type="button" class="btn btn-dark">5</button>
                                </div>
                            </blockquote>
                        </div>
                        <div class="carousel-item carousel-item-survey">
                            <blockquote class="blockquote">
                                <p class="mt-3">Los líderes animan a que los demas entreguen opiniones distintas a las suyas</p>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button type="button" class="btn btn-dark">Muy en desacuerdo</button>
                                    <button type="button" class="btn btn-dark">En desacuerdo</button>
                                    <button type="button" class="btn btn-dark">Neutro</button>
                                    <button type="button" class="btn btn-dark">De acuerdo</button>
                                    <button type="button" class="btn btn-dark">Muy de acuerdo</button>
                                </div>
                            </blockquote>
                        </div>
                        <div class="carousel-item carousel-item-survey">
                            <blockquote class="blockquote">
                                <p class="mt-3">Todos reciben un trato respetuoso y digno</p>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button type="button" class="btn btn-dark">Muy en desacuerdo</button>
                                    <button type="button" class="btn btn-dark">En desacuerdo</button>
                                    <button type="button" class="btn btn-dark">Neutro</button>
                                    <button type="button" class="btn btn-dark">De acuerdo</button>
                                    <button type="button" class="btn btn-dark">Muy de acuerdo</button>
                                </div>
                            </blockquote>
                        </div>
                        <div class="carousel-item carousel-item-survey">
                            <blockquote class="blockquote">
                                <p class="mt-1">Tengo suficiente tiempo para terminar con mi trabajo en la jornada</p>
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
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Survey;