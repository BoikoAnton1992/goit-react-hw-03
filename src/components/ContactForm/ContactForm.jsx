import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function FeedbackForm({ onAdd }) {
  const nameFieldId = useId();
  const numberlFieldId = useId();

  const handleSubmit = (value, action) => {
    onAdd({
      id: uuid(),
      name: value.name,
      number: value.number,
    });
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.mainContainer}>
        <div className={css.fieldContainer}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Your Name"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorText}
          />
        </div>

        <div className={css.fieldContainer}>
          <label htmlFor={numberlFieldId}>Number</label>
          <Field
            type="phone"
            name="number"
            id={numberlFieldId}
            placeholder="xxx-xx-xx"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorText}
          />
        </div>
        <button className={css.addContactButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
