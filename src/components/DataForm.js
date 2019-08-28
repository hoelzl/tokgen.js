import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Redirect } from "react-router-dom";

class DataForm extends React.Component {
  state = {
    redirect: false
  };

  render() {
    if (this.state.redirect) {
      console.log("Redirecting");
      return <Redirect to="/token" />;
    }
    return (
      <div>
        <Formik
          className="ui form"
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "An email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              this.props.onNewToken("GeneratedToken");
              this.setState({ redirect: true });
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="ui form">
              <div className="ui field">
                <label className="ui label" of="firstName">
                  First Name:
                </label>
                <Field type="text" name="firstName" />
              </div>
              <div className="ui field">
                <label className="ui label" of="lastName">
                  Last Name:
                </label>
                <Field type="text" name="lastName" />
              </div>
              <div className="ui field">
                <label className="ui label" of="email">
                  Email:
                </label>
                <Field type="email" name="email" />
                <ErrorMessage
                  className="ui label"
                  name="email"
                  component="div"
                />
              </div>
              <button className="ui button fluid" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default DataForm;
