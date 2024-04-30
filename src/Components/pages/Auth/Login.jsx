import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../../Reusable/Buttons/SubmitButton/SubmitButton";

export default function Login() {
  return (
    <section
      className="w-[400px]"
      onSubmit={(event) => event.stopPropagation()}
    >
      <div className="w-full text-center mb-5 font-Worksans-SemiBold text-3xl">
        <h1>Login</h1>
        <div className="flex items-center justify-center w-full gap-1 text-sm mt-3 font-Worksans-Regular text-zinc-500">
          <span> Haven't an account?</span>
          <Link to={'/auth/register'} className="text-prime-10"> 
          Register
          </Link>
        </div>
      </div>
      <Formik
        initialValues={{
          idenitifier: null,
          password: null,
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form>
            <Field
              className="input-element"
              name="idenitifier"
              placeholder="Enter the username.."
            />
            <Field
              className="input-element"
              name="password"
              type="password"
              placeholder="Enter the password.."
            />

            <div className="flex items-center gap-1 select-none mt-1">
              <input type="checkbox" name="remember " id="remember" className="accent-amber-600" />
              <label htmlFor="remember">Remember me</label>
            </div>

          <SubmitButton
          value={"LOGIN"}
           />

            <div className="text-center dark:text-dark-60 text-zinc-400 text-sm mt-4 duration-150">
              Developed by CloudsTech.
            </div>
            <div className="my-3 text-sm text-center text-sky-500">
              <Link to={'/'}>
              Back
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
