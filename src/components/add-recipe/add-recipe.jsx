import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addRecipeApi } from '../../redux/recipe/recipe.actions';

import FormInput from '../form-input/form-input';

const AddRecipe = (props) => {
    const [directionFields, setDirectionFields] = useState([{ instructions: null }]);
    const [ingredientsFields, setIngredientsFields] = useState([{ amount: null, measurement: null, name: null }]);
    const [formFields, setFormFields] = useState({
        title: '',
        description: '',
        directions: {},
        editDate: '',
        ingredients: {},
        postDate: '',
        prepTime: '',
        servings: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;

        setFormFields(prevState => {
            return { ...prevState, [name]: value }
        })
    }
    const handleSubmit = () => {
        props.addRecipeApi(formFields);
    };

    const handleDirectionsChange = (i, event) => {
        const values = [...directionFields];
        values[i].instructions = event.target.value;
        setDirectionFields(values);
        setFormFields(prevState => {
            return { ...prevState, directions: values }
        })
    }

    const handleDirectionsAdd = () => {
        const values = [...directionFields];
        values.push({ instructions: null });
        setDirectionFields(values);
    }

    const handleDirectionsRemove = (i) => {
        const values = [...directionFields];
        values.splice(i, 1);
        setDirectionFields(values);
    }

    const handleIngredientsChange = (i, event) => {
        const values = [...ingredientsFields];
        values[i][event.target.name] = event.target.value;
        setIngredientsFields(values);
        setFormFields(prevState => {
            return { ...prevState, ingredients: values }
        })
    }

    const handleIngredientsAdd = () => {
        const values = [...ingredientsFields];
        values.push({ amount: null, measurement: null, name: null });
        setIngredientsFields(values);
    }

    const handleIngredientsRemove = (i) => {
        const values = [...ingredientsFields];
        values.splice(i, 1);
        setIngredientsFields(values);
    }

    return (
        <>
            <h3>Add Recipe</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col">
                        <FormInput type="text" name="title" label="Title" value={formFields.title} handleChange={handleChange} />
                        <FormInput type="text" name="description" label="Description" value={formFields.description} handleChange={handleChange} />
                        <div className="form-group">
                            <label>Directions</label>
                            <button type="button" onClick={() => handleDirectionsAdd()} className="btn btn-outline-primary btn-sm ml-2">
                                Add step
                            </button>

                            {directionFields.map((field, idx) => {
                                return (
                                    <div className="input-group" key={`${field}-${idx}`}>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter instructions"
                                            value={field.instructions || ""}
                                            onChange={e => handleDirectionsChange(idx, e)}
                                        />
                                        <div className="input-group-append">
                                            <button type="button" onClick={() => handleDirectionsRemove(idx)} className="btn btn-secondary btn-sm ml-2">
                                                X
                                </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-row">
                            <div className="col">
                                <FormInput type="text" name="prepTime" label="Prep Time" value={formFields.prepTime} handleChange={handleChange} />
                            </div>
                            <div className="col">
                                <FormInput type="text" name="servings" label="Servings" value={formFields.servings} handleChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Ingredients</label>
                            <button type="button" onClick={() => handleIngredientsAdd()} className="btn btn-outline-primary btn-sm ml-2">
                                Add ingredient
                            </button>

                            {ingredientsFields.map((field, idx) => {
                                return (
                                    <div className="input-group" key={`${field}-${idx}`}>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="amount"
                                            placeholder="Amount"
                                            value={field.amount || ""}
                                            onChange={e => handleIngredientsChange(idx, e)}
                                        />
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="measurement"
                                            placeholder="Measurement"
                                            value={field.measurement || ""}
                                            onChange={e => handleIngredientsChange(idx, e)}
                                        />
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={field.name || ""}
                                            onChange={e => handleIngredientsChange(idx, e)}
                                        />
                                        <div className="input-group-append">
                                            <button type="button" onClick={() => handleIngredientsRemove(idx)} className="btn btn-secondary btn-sm ml-2">
                                                X
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    addRecipeApi: item => dispatch(addRecipeApi(item))
})

export default connect(null, mapDispatchToProps)(AddRecipe);