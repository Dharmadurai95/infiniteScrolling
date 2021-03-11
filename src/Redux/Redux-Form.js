import React,{ useEffect,useState } from "react";
import { Field, reduxForm ,FormSection,FieldArray,arrayPush} from "redux-form";
import FIrstName from "./FIrstName";
import { renderInput,renderSelect } from './inputFeild'
let validate  = (value) => {
    let { formSectionFirstName} = value
    let errors ={}
    if(!formSectionFirstName) {
        errors.formSectionFirstName = 'Fist name is Required'
    }
    if(!value.LastName) {
        errors.LastName = 'Fist lastName is Required'
    }
    if(!value.Email) {
        errors.Email = 'Fist Email is Required'
    }
    if(!value.Names) {
        errors.Names = 'Fist Names is Required'
    }
    return errors;
}

function arrayComponent({fields}){
console.log(fields.length,"@")
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  function tolalCoApp() {
    for(let initial= 0 ; initial < 5 ; initial++){
        fields.push({})
    }
  //  fields.push({})
  } 
  tolalCoApp()
}, [])

let filedPupurlator =(event)=> {
  console.log(event)
  
}


  return(
    <ul>
      {fields.map((mem,index)=> (
        <>
        <FormSection name='arrayName'>
         <Field name={`${mem}firstName${index}`} type={'text'} component={renderInput} onChange={filedPupurlator}/>
        </FormSection>
         {/* <Field name={`${mem}secondName${index}`} type={'text'} component={renderInput}/>
         <Field name={`${mem}lastName${index}`} type={'text'} component={renderInput}/> */}
        </>
      ))}
    </ul>)
  
}


const UserForm = () => {
  let arr = [
    { name: "Dharma" },
    { name: "bavusika" },
    { name: "000" },
    { name: "55" },
    { name: "durai" },
  ];
  return (
    <form>
      {/* <FormSection name='formSection'>
      <FIrstName />
      <Field
        name="LastName"
        label="Last Name"
        type="text"
        component={renderInput}
      />
      <Field name="Email" label="Email" type="email" component={renderInput} />
      <Field name="Names" label="List of Names" component={renderSelect}>
          <option></option>
        {arr.map((value, index) => {
          console.log(value);
          return (
            <option value={value.name} key={index}>
              {value.name}
            </option>
          );
        })}
      </Field>
      </FormSection> */}

      <FieldArray name={"array"} component={arrayComponent} />
      {/* <FieldArray name={"arrayIbw"} component={arrayComponent} /> */}
    </form>
  );
};

const wraper = reduxForm({
  form: "userForm",
  validate:validate
})(UserForm);

export default wraper;
