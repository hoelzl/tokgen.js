import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Redirect } from "react-router-dom";

const lut = [];
for (var i = 0; i < 256; i++) {
  lut[i] = (i < 16 ? "0" : "") + i.toString(16);
}
function generateGuid() {
  var d0 = (Math.random() * 0xffffffff) | 0;
  var d1 = (Math.random() * 0xffffffff) | 0;
  var d2 = (Math.random() * 0xffffffff) | 0;
  var d3 = (Math.random() * 0xffffffff) | 0;
  return (
    lut[d0 & 0xff] +
    lut[(d0 >> 8) & 0xff] +
    lut[(d0 >> 16) & 0xff] +
    lut[(d0 >> 24) & 0xff] +
    "-" +
    lut[d1 & 0xff] +
    lut[(d1 >> 8) & 0xff] +
    "-" +
    lut[((d1 >> 16) & 0x0f) | 0x40] +
    lut[(d1 >> 24) & 0xff] +
    "-" +
    lut[(d2 & 0x3f) | 0x80] +
    lut[(d2 >> 8) & 0xff] +
    "-" +
    lut[(d2 >> 16) & 0xff] +
    lut[(d2 >> 24) & 0xff] +
    lut[d3 & 0xff] +
    lut[(d3 >> 8) & 0xff] +
    lut[(d3 >> 16) & 0xff] +
    lut[(d3 >> 24) & 0xff]
  );
}

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
              this.props.onNewToken(generateGuid());
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
