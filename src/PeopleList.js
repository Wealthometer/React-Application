import React from "react"

export const PeopleList = ({ people }) => { 
    return people.map(person => (
        <div>
            <h3>{person.name}</h3>
            <p>Age: {person.age}</p>
            <p>Hair-Color{person.hairColor}</p>
        </div>
    ));
}  