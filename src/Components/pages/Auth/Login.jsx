import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import useSubmit from "../../../Utils/Hooks/useSubmit";
import Error from "../../Reusable/Formik/Error";
import { getLogin } from "../../../Utils/Redux/Ducks/ducks";

export default function Login() {
  const Submit = useSubmit();
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },

    onSubmit: (values, { setSubmitting }) => {
      Submit.submitHandler({
        action: getLogin({ user: values, setLoading: setSubmitting }),
      });
    },
    validate: (values) => {
      const errors = {};

      if (!values.identifier) {
        errors.identifier = "Please enter the username ..";
      } else if (values.identifier.length < 4) {
        errors.identifier = "Username minium length is 4 characters..";
      }
      if (!values.password) {
        errors.password = "Password is required !";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters..";
      }

      return errors; // You missed this line
    },
  });

  return (
    <section className="w-[400px]">
      <div className="w-full text-center mb-5 font-Worksans-SemiBold text-3xl">
        <h1>Login</h1>
        <div className="flex items-center justify-center w-full gap-1 text-sm mt-3 font-Worksans-Regular text-zinc-500">
          <span> Haven't an account?</span>
          <Link to={"/auth/register"} className="text-prime-10">
            Register
          </Link>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <input
          className="input-element"
          placeholder="Enter the your username .."
          name="identifier"
          onChange={formik.handleChange}
          value={formik.values.identifier}
          onBlur={formik.handleBlur} // Add onBlur event
        />
        <Error
          err={formik.errors.identifier}
          touch={formik.touched.identifier}
        />

        <input
          className="input-element"
          placeholder="Enter the your password .."
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // Add onBlur event
        />
        <Error err={formik.errors.password} touch={formik.touched.password} />

        <Submit.Button title={"CONTINUE"} disabled={formik.isSubmitting} />
      </form>
    </section>
  );
}
