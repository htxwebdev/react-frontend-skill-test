import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '../card/card';

const CardList = (props) => {
    const { recipeData } = props.recipes;

    return (
        <>
            <div className="d-flex flex-row-reverse mb-3">
                <Link to={`/add/recipe`} className="btn btn-primary">
                    + Add New Recipe
                </Link>
            </div>
            <div className="row">
                {recipeData ?
                    recipeData.map((item, index) => <Card props={item} key={index} />)
                    : ''}
            </div>
        </>
    )
}

const mapStateToProps = ({ recipes }) => ({
    recipes
})

export default connect(mapStateToProps)(CardList);