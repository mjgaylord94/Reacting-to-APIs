import React from 'react';

const FilmCard = (props) => {
    return (
        <div className="card col-md-3 m-3" key={`film-card-${props.film.title}`}>
                        <div className="card-body">
                            <h3 className="card-title text-center">{props.film.title}</h3>
                            <h6 className="card-subtitle text-muted text-center">{props.film.original_title}</h6>
                            <h6 className="card-subtitle text-muted text-center mb-4">{props.film.original_title_romanised}</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span style={{ color: "#2c9be5" }}>Director: </span>
                                    <span>{props.film.director}</span>
                                </li>
                                <li className="list-group-item">
                                    <span style={{ color: "#2c9be5" }}>Producer: </span>
                                    <span>{props.film.producer}</span>
                                </li>
                                <li className="list-group-item">
                                    <span style={{ color: "#2c9be5" }}>Release Date: </span>
                                    <span>{props.film.release_date}</span>
                                </li>
                                <li className="list-group-item">
                                    <span style={{ color: "#2c9be5" }}>Running Time: </span>
                                    <span>{props.film.running_time} minutes</span>
                                </li>
                                <li className="list-group-item">
                                    <span style={{ color: "#2c9be5" }}>Rotten Tomato Score: </span>
                                    <span>{props.film.rt_score}%</span>
                                </li>
                                <li className="list-group-item">
                                    <span style={{ color: "#2c9be5" }}>Description: </span>
                                    <span>{props.film.description}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
    )
};

export default FilmCard;