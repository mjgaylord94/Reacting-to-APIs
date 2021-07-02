import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FilmCard from './components/FilmCard';
import PersonCard from './components/PersonCard';

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
            {films.map(film => <FilmCard film={film} />)}
            </div>
            {/* People Cards */}
            <div id="generated-people" className="row d-flex justify-content-center">
                {people.map(person => <PersonCard person={person} />)}
            </div>

        </>
    )
}

export default App;