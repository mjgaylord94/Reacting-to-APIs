import { render } from '@testing-library/react';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';

const App = () => {
    // use states and their fetch requests
    const [films, setFilms] = useState([])
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))
    }, [])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople))
    }, [])

    // Click for Film Button
    // It will render Film Cards based on the fetched data.
    // If Person Cards are already generated, they will be removed before rendering the Film Cards
    // If Film Cards are already generated, they will be removed bring you back to the default page
    function filmClick() {
        let generatedPeople = document.getElementById("generated-people")
        let generatedFilms = document.getElementById("generated-films")

        if (generatedFilms) {
            generatedFilms.remove()
        }
        else {
            if (generatedPeople) {
                generatedPeople.remove()
            }

            render(
                <div id="generated-films" className="row d-flex justify-content-center">
                    {films.map(film => (
                        <div className="card col-md-3 m-3" key={`film-card-${film.title}`}>
                            <div className="card-body">
                                <h3 className="card-title text-center">{film.title}</h3>
                                <h6 className="card-subtitle text-muted text-center">{film.original_title}</h6>
                                <h6 className="card-subtitle text-muted text-center mb-4">{film.original_title_romanised}</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span style={{ color: "#2c9be5" }}>Director: </span>
                                        <span>{film.director}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span style={{ color: "#2c9be5" }}>Producer: </span>
                                        <span>{film.producer}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span style={{ color: "#2c9be5" }}>Release Date: </span>
                                        <span>{film.release_date}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span style={{ color: "#2c9be5" }}>Running Time: </span>
                                        <span>{film.running_time} minutes</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span style={{ color: "#2c9be5" }}>Rotten Tomato Score: </span>
                                        <span>{film.rt_score}%</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span style={{ color: "#2c9be5" }}>Description: </span>
                                        <span>{film.description}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>,
                document.getElementById("film-card-container"))
        }
    }

    // Click for People Button
    // It will render Person Cards based on the fetched data.
    // If Film Cards are already generated, they will be removed before rendering the Person Cards
    // If Person Cards are already generated, they will be removed bring you back to the default page
    function peopleClick() {
        let generatedPeople = document.getElementById("generated-people")
        let generatedFilms = document.getElementById("generated-films")

        if (generatedPeople) {
            generatedPeople.remove()
        }
        else {
            if (generatedFilms) {
                generatedFilms.remove()
            }

            render(
                <div id="generated-people" className="row d-flex justify-content-center">
                    {people.map(person => (
                        <div className="card col-md-3 m-3" key={`person-card-${person.name}`}>
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">{person.name}</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span style={{ color: "#2c9be5" }}>Gender: </span>
                                        <span>{person.gender}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span style={{ color: "#2c9be5" }}>Age: </span>
                                        <span>{person.age}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span style={{ color: "#2c9be5" }}>Eye Color: </span>
                                        <span>{person.eye_color}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span style={{ color: "#2c9be5" }}>Hair Color: </span>
                                        <span>{person.hair_color}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>,
                document.getElementById("people-card-container"))
        }
    }

    // Default Page Return
    return (
        <>
            {/* Image Header */}
            <Header></Header>
            {/* Buttons */}
            <div className="row d-flex justify-content-center align-items-center">
                <button id="films-button" className="btn btn-secondary m-3 p-2 col-3" onClick={filmClick}>Load Films</button>
                <button id="people-button" className="btn btn-secondary m-3 p-2 col-3" onClick={peopleClick}>Load People</button>
            </div>
            {/* Film Cards */}
            <div id="film-card-container"></div>
            {/* People Cards */}
            <div id="people-card-container"></div>

        </>
    )
}

export default App;