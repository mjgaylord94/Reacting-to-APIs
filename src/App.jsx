import React from 'react';
import { useState } from 'react';
import Header from './components/Header';

const App = () => {
    // use states
    const [filmClk, setFilmClk] = useState(false)
    const [peopleClk, setPeopleClk] = useState(false)

    const [films, setFilms] = useState([])
    const [people, setPeople] = useState([])

    // If FilmClk state is false, it will set it to true and then fetch data to populate into Film state.
    // It also clears the state of the People to ensure only one state is being mapped at a time.
    // If FilmClk state is true, it clears the current state.
    function filmClick() {
        if (filmClk === false) {
            setFilmClk(true)
            setPeopleClk(false)
            setPeople([])

            fetch('https://ghibliapi.herokuapp.com/films')
                .then(res => res.json())
                .then(allFilms => setFilms(allFilms))

        }
        else if (filmClk) {
            setFilmClk(false)

            setFilms([])
        }
    }

    // If PeopleClk state is false, it will set it to true and then fetch data to populate into People state.
    // It also clears the state of the Film to ensure only one state is being mapped at a time.
    // If PeopleClk state is true, it clears the current state.
    function peopleClick() {
        if (peopleClk === false) {
            setPeopleClk(true)
            setFilmClk(false)
            setFilms([])

            fetch('https://ghibliapi.herokuapp.com/people')
                .then(res => res.json())
                .then(allPeople => setPeople(allPeople))

        }
        else if (peopleClk) {
            setPeopleClk(false)

            setPeople([])
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
            </div>
            {/* People Cards */}
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
            </div>

        </>
    )
}

export default App;