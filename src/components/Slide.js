import React from "react";
import survey_img from "../components/img/survey_img.jpg";
import metric_img from "../components/img/metric_img.png";
import sugestion_img from "../components/img/sugestion_img.jpg";
import 'bootstrap/dist/js/bootstrap.js';
import bg1 from "../components/img/bg1.jpg";

const Slide = () => {
    return (
        <div className="container" style={{ marginTop: 40, marginBottom: 40 }}>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="slides carousel-inner shadow">
                    <div className="carousel-item active">
                        <div class="slide_homepage row">
                            <div className="slide_text col-sm-5">
                                <h1>SCROOM</h1>
                                <p>La plataforma que se preocupa por el bienestar laboral de tus profesionales TI</p>
                                <button type="button" class="btn btn-dark">Regsitra tu Empresa</button>
                            </div>
                            <img src={bg1} className="slide_bg col-sm-7" alt="not loaded" />
                        </div>
                        {/* <div class="slide_homepage carousel-caption d-none d-md-block">
                            <h1>La plataforma que se preocupa por el bienestar laboral de los profesionales TI</h1>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <div class="slide_homepage row">
                            <div className="slide_text col-sm-5">
                                <h1>Encuestas Efectivas</h1>
                                <p>Encuestas de 15-20 preguntas que miden la satisfacción laboral de los trabajadores</p>
                            </div>
                            <img src={survey_img} className="slide_bg d-block col-sm-7" alt="not loaded" />
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div class="slide_homepage row">
                            <div className="slide_text col-sm-5">
                                <h1>Metricas Generales</h1>
                                <p>Un sistema de metricas que mostrarán solo los resultados generales de todas las encuestas, protegiendo la privacidad de los usuarios</p>
                            </div>
                            <img src={metric_img} className="slide_bg d-block col-sm-7" alt="not loaded" />
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div class="slide_homepage row">
                            <div className="slide_text col-sm-5">
                                <h1>Sugerencias de mejora</h1>
                                <p>Sistema de sugerencias de medidas para tomar acción cuando tu empresa no obtenga buenos resultados de satisfacción</p>
                            </div>
                            <img src={sugestion_img} className="slide_bg d-block col-sm-7" alt="not loaded" />
                        </div>
                    </div>
                </div>
                <button className="prev_slide carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="prev_icon carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="next_slide carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="next_icon carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slide;