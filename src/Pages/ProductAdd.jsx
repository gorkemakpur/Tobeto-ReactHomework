import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import * as Yup from "yup";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  //formun ilk değerleri
  const initialValues = { title: "", description: "", price: 0 };

  const schema = Yup.object({
    title: Yup.string().required("Title required"),
    description: Yup.string().required("Description Required"),
    price: Yup.number().required("Price required"),
  });
  return (
    <div>
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit={(values)=> {
        console.log(values);
      }}
      >
        <Form className="ui form">
            <KodlamaIoTextInput name="title" placeholder="title"/>
            <KodlamaIoTextInput name="description" placeholder="description"/>
            <KodlamaIoTextInput name="price" placeholder="price"/>

          <Button type="submit" floated="right" positive>Submit</Button>
        </Form>
      </Formik>
    </div>
  );
}
