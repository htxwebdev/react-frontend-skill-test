import React from 'react';

const SpecialsListItem = ({ props }) => {
    const { title, text } = props;

    return (
        <li className="list-group-item">
            <h4>{title}</h4>
            <p>{text}</p>
        </li>
    )
}

export default SpecialsListItem;