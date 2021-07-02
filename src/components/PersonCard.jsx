import React from 'react';

const Header = (props) => {
    return (
        <>
            <div className="card col-md-3 m-3" key={`person-card-${props.person.name}`}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">{props.person.name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span style={{ color: "#2c9be5" }}>Gender: </span>
                            <span>{props.person.gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span style={{ color: "#2c9be5" }}>Age: </span>
                            <span>{props.person.age}</span>
                        </li>
                        <li className="list-group-item">
                            <span style={{ color: "#2c9be5" }}>Eye Color: </span>
                            <span>{props.person.eye_color}</span>
                        </li>
                        <li className="list-group-item">
                            <span style={{ color: "#2c9be5" }}>Hair Color: </span>
                            <span>{props.person.hair_color}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;