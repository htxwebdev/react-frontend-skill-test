import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SpecialsListItem from '../specials-list-item/specials-list-item';

const SpecialsList = (props) => {
    const { specialsData } = props.specials;

    return (
        <>
            <div className="d-flex flex-row-reverse mb-3">
                <Link to={`/add/special`} className="btn btn-primary">
                    + Add New Special
                </Link>
            </div>
            <ul className="list-group">
                {specialsData ?
                    specialsData.map((item, index) => <SpecialsListItem props={item} key={index} />)
                    : ''}
            </ul>
        </>
    )
}

const mapStateToProps = ({ specials }) => ({
    specials
})


export default connect(mapStateToProps)(SpecialsList);