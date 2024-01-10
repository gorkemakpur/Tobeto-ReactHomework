import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, Checkbox, FormField } from "semantic-ui-react";
import * as Yup from "yup";

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

          <FormField>
            <Field name="title" placeholder="title"></Field>
          </FormField>

          <FormField>
            <Field name="description" placeholder="description"></Field>
          </FormField>

          <FormField>
            <Field name="price" placeholder="price" />
          </FormField>

          <Button type="submit" floated="right" positive>Submit</Button>
        </Form>
      </Formik>
    </div>
  );
}
