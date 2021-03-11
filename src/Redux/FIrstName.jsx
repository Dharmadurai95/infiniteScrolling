import React from 'react';
import { Field } from 'redux-form';
import { renderInput,renderSelect } from './inputFeild'


const FIrstName = () => {
    return (
        <div>
                 <Field
        name="FistName"
        label="First Name"
        type="text"
        component={renderInput}
      />
        </div>
    )
}

export default FIrstName
