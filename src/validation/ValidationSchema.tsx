
import { useEffect, useState } from 'react';
import * as yup from 'yup';

const ValidationSchema = (props: any) => {
const validationSchemaLibrary = [
    {title: yup.string().required("Please enter title")},
    {age: yup.number().required("Please enter age")},
    {date: yup.date().required("Please enter date")},
];

const [validationSchemaContainer, setValidationSchemaContainer]=useState({});

props.map((validation: string) => {
    const matchingSchema = validationSchemaLibrary.find((schema)=>{
        Object.keys(schema)[0] === validation;
    });

    if(matchingSchema){
        setValidationSchemaContainer((prevSchema) => ({
            ...prevSchema,
            ...matchingSchema,
        }));
    };
});


useEffect(()=>{
    console.log("Schema is: ", validationSchemaContainer);
})

    return validationSchemaContainer;
}
 
export default ValidationSchema;