import React from "react";
import stars from "../components/img/stars.png"
import yago_img from "../components/img/yago_img.jpeg"

const WhyInformation = () => {
    return (
        <div className="why" id="why">
            <div className="why_description">
                <h1>¿Por qué Scroom?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros tortor, eleifend vitae odio vel, consectetur aliquam orci. Suspendisse turpis justo, molestie id lacinia in, sollicitudin id purus.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros tortor, eleifend vitae odio vel, consectetur aliquam orci. Suspendisse turpis justo, molestie id lacinia in, sollicitudin id purus.</p>
            </div>
            <div class="all_cards row">
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={yago_img}></img>
                        <div class="card-body">
                            <h5 class="card-title">Isabella Parry</h5>
                            <p class="card-text">Desarroladora</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={yago_img}></img>
                        <div class="card-body">
                            <h5 class="card-title">Diego Pérez</h5>
                            <p class="card-text">Scrum Master</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src={yago_img}></img>
                        <div class="card-body">
                            <h5 class="card-title">Maria Pino</h5>
                            <p class="card-text">Desarroladora</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <img src={yago_img}></img>
                        <div class="card-body">
                            <h5 class="card-title">Yago Ellen</h5>
                            <p class="card-text">Product Owner</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export { WhyInformation, PeopleInformation }