import React from "react";
import stars from "../components/img/stars.png";
import yago_img from "../components/img/yago_img.jpeg";
import survey_img from "../components/img/survey_img.jpg";
import metric_img from "../components/img/metric_img.png";
import sugestion_img from "../components/img/sugestion_img.jpg";

const Functionalities = () => {
    return (
        <div className="functionalities">
            <div class="f1_card mb-3">
                <div class="row g-0">
                    <div class="f_img col-md-7">
                        <img src={survey_img} class="img-fluid rounded-start shadow" alt="..." />
                    </div>
                    <div class="col-md-5">
                        <div class="f_description card-body">
                            <h1 class="card-title">Encuestas Efectivas</h1>
                            <p class="card-text">Encuestas de 15-20 preguntas que miden la satisfacción laboral de los trabajadores.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f2_card mb-3">
                <div class="row g-0">
                    
                    <div class="col-md-5">
                        <div class="f_description card-body">
                            <h1 class="card-title">Métricas Generales</h1>
                            <p class="card-text">Un sistema de métricas que mostrarán solo los resultados generales de todas las encuestas, protegiendo la privacidad de los usuarios.</p>
                        </div>
                    </div>
                    <div class="f_img col-md-7">
                        <img src={metric_img} class="img-fluid rounded-start shadow" alt="..." />
                    </div>
                </div>
            </div>
            <div class="f3_card mb-3">
                <div class="row g-0">
                    <div class="f_img col-md-7">
                        <img src={sugestion_img} class="img-fluid rounded-start shadow" alt="..." />
                    </div>
                    <div class="col-md-5">
                        <div class="f_description card-body">
                            <h1 class="card-title">Sugerencias</h1>
                            <p class="card-text">Sistema de sugerencias de medidas para tomar acción cuando tu empresa no obtenga buenos resultados de satisfacción.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="f2">
                <div className="f2_description">
                    <h1>Metricas Generales</h1>
                    <p>Un sistema de metricas que mostrarán solo los resultados generales de todas las encuestas, protegiendo la privacidad de los usuarios</p>
                </div>
            </div>
            <div className="f3">
                <div className="f3_description">
                    <h1>Sugerencias de mejora</h1>
                    <p>Sistema de sugerencias de medidas para tomar acción cuando tu empresa no obtenga buenos resultados de satisfacción</p>
                </div>
            </div> */}
        </div>
    )
}
const WhyInformation = () => {
    return (
        <div className="why" id="why">
            <div className="why_description">
                <h1>¿Por qué Scroom?</h1>
                <p>Más de 3500 organizaciones confían en Scroom para aumentar el compromiso, el rendimiento y la retención de los empleados.</p>
            </div>
            <div class="all_cards row">
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={stars} className="stars_img"></img>
                        <div class="card-body">
                            <h4 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary">Laura</small>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={stars} className="stars_img"></img>
                        <div class="card-body">
                            <h4 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary">Chris</small>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <img src={stars} className="stars_img"></img>
                        <div class="card-body">
                            <h4 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary">Carlos</small>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
const PeopleInformation = () => {
    return (
        <div className="who" id="who">
            <div className="team_description">
                <h1>Equipo Scroom</h1>
                <p>Contamos con un equipo capacitado para llevar a cabo proyectos desafiantes y en un ambiente donde los cambios son constantes.</p>
            </div>
            <div class="all_cards row">
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={yago_img}></img>
                        <div class="card-body">
                            <h5 class="card-title">Isabella Parry</h5>
                            <p class="card-text">Desarroladora</p>
                            <a href="#" class="btn btn-primary">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={yago_img}></img>
                        <div class="card-body">
                            <h5 class="card-title">Diego Pérez</h5>
                            <p class="card-text">Scrum Master</p>
                            <a href="#" class="btn btn-primary">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={yago_img}></img>
                        <div class="card-body">
                            <h5 class="card-title">Maria Pino</h5>
                            <p class="card-text">Desarroladora</p>
                            <a href="#" class="btn btn-primary">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <img src={yago_img}></img>
                        <div class="card-body">
                            <h5 class="card-title">Yago Ellen</h5>
                            <p class="card-text">Product Owner</p>
                            <a href="#" class="btn btn-primary">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export { WhyInformation, PeopleInformation, Functionalities }