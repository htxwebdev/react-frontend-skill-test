import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addSpecialApi } from '../../redux/special/special.actions';

import FormInput from '../form-input/form-input';

const AddSpecial = (props) => {
    const [formFields, setFormFields] = useState({
        title: '',
        text: '',
        type: '',
        ingredientId: uuidv4()
    });

    const handleChange = event => {
        const { name, value } = event.target;

        setFormFields(prevState => {
            return { ...prevState, [name]: value }
        })
    }
    const handleSubmit = () => {
        props.addSpecialApi(formFields);
    };

    return (
        <>
            <h3>Add Special</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col">
                        <FormInput type="text" name="title" label="Title" value={formFields.title} handleChange={handleChange} />
                        <FormInput type="text" name="text" label="Text" value={formFields.text} handleChange={handleChange} />
                        <FormInput type="text" name="type" label="Type" value={formFields.type} handleChange={handleChange} />
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    addSpecialApi: item => dispatch(addSpecialApi(item))
})

export default connect(null, mapDispatchToProps)(AddSpecial);