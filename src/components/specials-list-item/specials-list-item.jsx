import React from 'react';
import { Link } from 'react-router-dom';

const SpecialsListItem = ({ props }) => {
    const { title, text, type, uuid } = props;

    return (
        <li className="list-group-item">

            <div className="d-flex justify-content-between">
                <div>
                    <h4>{title}</h4>
                    <p>{text} | {type}</p>
                </div>
                <div>
                    <Link to={`/edit/special/:${uuid}`} className="btn btn-secondary">Edit</Link>
                </div>
            </div>
        </li>
    )
}

export default SpecialsListItem;