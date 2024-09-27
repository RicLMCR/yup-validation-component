
import { useEffect, useState } from 'react';
import * as yup from 'yup';

const ValidationSchema = (props: any) => {
const validationSchemaLibrary = [
    {title: yup.string().required("Please enter title")},
    {age: yup.number().required("Please enter age")},
    {date: yup.date().required("Please enter date")},
];

const propsToArray = Object.entries(props);

const [schemaEntry, setSchemaEntry]=useState();
const [validationSchemaContainer, setValidationSchemaContainer]=useState({});
const mySchema = {[schemaEntry]: yup[schemaEntry]().required("...")}

for(let i = 0; i <= propsToArray.length; i ++){
    setSchemaEntry(propsToArray[i]);
    setValidationSchemaContainer((prevSchema)=>{
        ...prevSchema,
        ...mySchema,
    })
}



useEffect(()=>{
    console.log("Schema is: ", validationSchemaContainer);
})

    return validationSchemaContainer;
}
 
export default ValidationSchema;