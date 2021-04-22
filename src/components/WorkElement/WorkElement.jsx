import React from 'react';

const WorkElement = ({id, person, description, distance, price, handleDelete}) => {
    return (
        <li>
            <p>ID: {id}</p>
            <p>Person: {person}</p>
            <p>Description: {description}</p>
            <p>Distance: {distance}</p>
            <p>Price: {price}</p>
            <button>Edit</button>
            <button onClick={handleDelete}>Remove</button>
        </li>
    );
}

export default WorkElement;