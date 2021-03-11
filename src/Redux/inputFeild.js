import * as React from "react";

export let renderInputField = (render) => ({
  input,
  meta,
  label,
  type,
  ...rest
}) => {
  console.log(meta, "hello world");
  return (
    <div
      style={{
        display: "flex",
        flexFlow: " column wrap",
        justifyContent: "center",
        alignContent: "space-between",
      }}
    >
      <label>{label}</label>
      {render(input, type, label, rest)}
      {meta.error && meta.touched && (
        <span style={{ color: "red", background: "white" }}>
          {meta.error} !
        </span>
      )}
    </div>
  );
};
export let renderInput = renderInputField((input, type, label) => (
  <input {...input} type={type} placeholder={label}   value = {input.value.replace(/[^A-Za-z0-9_@.*_!/#&+-]/ig, '')}/>
));
export let renderSelect = renderInputField((input, type, label, rest) => (
  <select {...input}>{rest.children}</select>
));
