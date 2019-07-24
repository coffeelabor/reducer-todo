import React from "react";
import { withFormik, Form, Field } from "formik";

const AddForm = values => {
  // console.log("AddFrom values", values);
  return (
    <Form>
      <h3>Add Todo</h3>
      <Field type="text" name="item" placeholder="New Todo" />
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: ({ item }) => {
    return {
      item: item || ""
    };
  },
  handleSubmit: (values, formikBag, props) => {
    // console.log
    formikBag.resetForm();
    console.log("Values Form", values);
    console.log("Values Form props", formikBag.props);
    formikBag.props.addTodo(values.item);
  }
})(AddForm);
