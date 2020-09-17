import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ props }) => {
    const { uuid, title, decscription, images } = props;
    const imagePath = "http://localhost:3001";

    return (
        <div className="card col-6 col-md-3 mx-md-1 my-md-1 px-0">
            {images ? <img src={`${imagePath}${images.small}`} className="card-img-top" alt={title} /> : ''}

            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{decscription}</p>

                <Link to={`/detail/:${uuid}`} className="btn btn-primary">
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default Card;