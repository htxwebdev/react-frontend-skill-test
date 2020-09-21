import React from 'react';
import { connect } from 'react-redux';

const Detail = (props) => {
    const { recipes: { recipeData }, specials: { specialsData } } = props;
    const recipeId = props.match.params.id.replace(':', '');
    const imagePath = "http://localhost:3001";

    if (recipeData && specialsData) {
        const recipeDetail = recipeData.filter(item => item.uuid === recipeId);
        const { title, description, directions, cookTime, images, ingredients, prepTime, servings, postDate } = recipeDetail[0] || {};

        const recipeSpecialIngredients = ingredients !== undefined && ingredients.length ? ingredients.map((item, index) => {
            const specialsFound = specialsData.filter(special => item.uuid === special.ingredientId);
            const { text, title, type } = specialsFound[0] || {};

            return (
                <li className="list-group-item" key={index}>
                    {item.amount} {item.measurement} {item.name}
                    {specialsFound.length ? <div className="py-1"><span class="badge badge-pill badge-primary">Special</span><p className="mb-0">{text}</p>{title} | Type: {type}</div> : ''}
                </li>
            )
        }) : null;

        const imageElement = images ? <img src={`${imagePath}${images.medium}`} className="img-fluid" alt={title} /> : <div className="bg-secondary text-center text-white h-25"><span className="d-flex justify-content-center align-items-center h-100">No image found</span></div>;

        const directionsList = directions !== undefined && directions.length ? directions.map((item, index) => <li key={index}>{item.instructions}</li>) : '';
        return (
            <div className="row">
                <div className="col col-md-4">
                    {imageElement}

                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">Prep Time: {prepTime}</li>
                        <li className="list-group-item">Cook Time: {cookTime}</li>
                        <li className="list-group-item">Servings: {servings}</li>
                    </ul>
                </div>

                <div className="col col-md-8">
                    <h4 className="mt-0">{title}</h4>
                    <p>{description}</p>
                    <h6>Ingredients</h6>
                    <ul className="list-group mb-3">
                        {recipeSpecialIngredients}
                    </ul>

                    <h6>Directions</h6>
                    <ul>
                        {directionsList}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div>
            <p>Loading</p>
        </div>
    )
}

const mapStateToProps = ({ recipes, specials }) => ({
    recipes,
    specials
})

export default connect(mapStateToProps)(Detail);