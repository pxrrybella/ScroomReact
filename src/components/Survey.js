import React from "react";

const Survey = () => {
    return (
        <div className="col-sm-7 survey mt-5">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <figure className="text-center">
                        <div class="carousel-item carousel-item-survey active">
                            <blockquote class="blockquote">
                                <p class="mt-4">¿Qué tan estresado te sentiste en este Sprint?</p>
                                <div class="d-grid gap-1 col-6 mx-auto survey-options">
                                    <button type="button" class="btn btn-dark">Nada motivado</button>
                                    <button type="button" class="btn btn-dark">Poco motivado</button>
                                    <button type="button" class="btn btn-dark">Ni motivado, ni desmotivado</button>
                                    <button type="button" class="btn btn-dark">Motivado</button>
                                    <button type="button" class="btn btn-dark">Muy motivado</button>
                                </div>
                            </blockquote>
                        </div>
                        <div class="carousel-item carousel-item-survey">
                            <blockquote class="blockquote">
                                <p class="mt-4">¿Qué tan motivado te has sentido en este Sprint?</p>
                                <div class="d-grid gap-1 col-6 mx-auto survey-options">
                                    <button type="button" class="btn btn-dark">Nada estresado</button>
                                    <button type="button" class="btn btn-dark">Poco Estresado</button>
                                    <button type="button" class="btn btn-dark">Medianamente estresado</button>
                                    <button type="button" class="btn btn-dark">Estresado</button>
                                    <button type="button" class="btn btn-dark">Muy Estresado</button>
                                </div>
                            </blockquote>
                        </div>
                        <div class="carousel-item carousel-item-survey">
                            <blockquote class="blockquote">
                                <p class="mt-4">Los líderes animan a que los demas entreguen opiniones distintas a las suyas</p>
                                <div class="d-grid gap-1 col-6 mx-auto survey-options">
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
                                <p class="mt-4">Todos reciben un trato respetuoso y digno</p>
                                <div class="d-grid gap-1 col-6 mx-auto survey-options">
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
                            <p className="mt-4">Tengo suficiente tiempo para terminar con mi trabajo en la jornada. asdasdadasdad adsda sdasd dsadsad asdasdasd asdasda .</p>
                                <div class="d-grid gap-1 col-6 mx-auto survey-options">
                                    <button type="button" class="btn btn-dark">Muy en desacuerdo</button>
                                    <button type="button" class="btn btn-dark">En desacuerdo</button>
                                    <button type="button" class="btn btn-dark">Neutro</button>
                                    <button type="button" class="btn btn-dark">De acuerdo</button>
                                    <button type="button" class="btn btn-dark">Muy de acuerdo</button>
                                </div>
                            </blockquote>
                            <button type="button" class="btn btn-primary mt-1 survey-send" >Enviar</button>
                            
                        </div>
                        
                    </figure>

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
    )
}
export default Survey;