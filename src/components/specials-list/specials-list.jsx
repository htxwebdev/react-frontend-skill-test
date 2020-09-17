import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSpecialsApi } from '../../redux/special/special.actions';

import SpecialsListItem from '../specials-list-item/specials-list-item';

const SpecialsList = (props) => {
    const { specialsData } = props.specials;

    return (
        <ul className="list-group">
            {specialsData ?
                specialsData.map((item, index) => <SpecialsListItem props={item} key={index} />)
                : ''}
        </ul>
    )
}

const mapStateToProps = ({ specials }) => ({
    specials
})


export default connect(mapStateToProps)(SpecialsList);