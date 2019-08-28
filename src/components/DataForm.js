import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const DataForm = props => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label of='firstName'>First Name: </label>
            <Field type='text' name='firstName' />
            <br />
            <label of='lastName'>Last Name: </label>
            <Field type='text' name='lastName' />
            <br />
            <label of='email'>Email: </label>
            <Field type='email' name='email' />
            <br />
            <ErrorMessage name='email' component='div' />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DataForm;
