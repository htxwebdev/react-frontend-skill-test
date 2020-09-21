import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="form-group">
        {label ? (
            <label>
                {label}
            </label>
        ) : null}
        <input type="text" className="form-control" onChange={handleChange} {...otherProps} />

    </div>
)

export default FormInput;