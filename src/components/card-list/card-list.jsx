import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRecipesApi } from '../../redux/recipe/recipe.actions';

import Card from '../card/card';

const CardList = (props) => {
    const { recipeData } = props.recipes;

    return (
        <div className="row">
            {recipeData ?
                recipeData.map((item, index) => <Card props={item} key={index} />)
                : ''}
        </div>
    )
}

const mapStateToProps = ({ recipes }) => ({
    recipes
})

export default connect(mapStateToProps)(CardList);