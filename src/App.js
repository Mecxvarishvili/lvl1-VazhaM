import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SignUpForm from './components/SignUpForm';

const App = () => {
  const [data, setData] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string()
        .max(25, 'Must be 25 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .max(50, "must Be 50 charecters or less")
        .required('Required'),
    }),
    onSubmit: values => {
      setLoading(true)
      fetch('https://reqres.in/api/users', {
        method: "POST",
        body:JSON.stringify(
          {
            firstName: formik.values.firstName,
            lastName: formik.values.lastName, 
            email: formik.values.email,
            password: formik.values.password
          }
        )
      })
        .then(res => res.json())
        .then(json => setData(json.id)).catch(error => console.log(error))
    },
  });
  return (
    <SignUpForm data={data} loading={isLoading} name={formik.values.firstName}>
        <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? ( <div className="error">{formik.errors.firstName}</div> ) : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? ( <div className="error">{formik.errors.lastName}</div> ) : null}

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div> ) : null}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (<div className="error">{formik.errors.password}</div> ) : null}

          <div className="forbutton"><button type="submit">Submit</button></div>
        </form>
      </div>
    </SignUpForm>
  );
};
export default App;
