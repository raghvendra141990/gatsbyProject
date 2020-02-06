import React from "react";
import Formol, { Field } from "formol";
import "formol/lib/default.css";
import formJSON from "./form.json"

const handleSubmit = async values => {
  console.log(values);
  // process submission (e.g., send to API)...
 document.getElementsByClassName('result')[0].innerHTML=JSON.stringify(values)
};
var formHtml=[]
const fromItem = {}
function generateFormHtml(data){
  if(!Array.isArray(data)){
    if(data.name==='phone'){
      formHtml.push(<Field required  key={data.name} type={data.inputType} name={data.name}  className={`input-${data.class}`}  pattern="^[0-9]{10}$"
          validityErrors={({ patternMismatch }) =>
          patternMismatch && "Phone Must be 10 digit."
        }>{data.name}</Field>)
    }
    else
      formHtml.push(<Field required  key={data.name} type={data.inputType}  name={data.name} className={`input-${data.class}`} >{data.name}</Field>)
      if(data.value)
        fromItem[data.name]=data.value
        if(data.children){
              return generateFormHtml(data.children)
        }
    return formHtml
  }
  else{
data.map((item, index) => {
          return generateFormHtml(item)
        }
      )
}
}
generateFormHtml(formJSON);
const SignUpForm = () => {
  return <Formol onSubmit={handleSubmit}  item={fromItem}>
            {formHtml}
            <div className="result"></div>
        </Formol>
};
export default SignUpForm;
