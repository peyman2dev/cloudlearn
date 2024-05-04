import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import useSubmit from "../../../Utils/Hooks/useSubmit";
import { getRegister } from "../../../Utils/Redux/Ducks/ducks";
import Error from "../../Reusable/Formik/Error";
import registerSchema from "../../../Utils/Validations/registerSchema";
import useSwal from "../../../Utils/Hooks/useSwal";

export default function Register() {
  const Swal = useSwal();

  const Submit = useSubmit();
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      // Trying that is form valid ?
      try {
        let userInfos = {
          ...values,
          confirmPassword: values.password,
        };
        let isFormValid = await registerSchema.validate(userInfos, {
          abortEarly: false,
        });

        //  If form was valid :
        if (isFormValid) {
          Submit.submitHandler({
            action: getRegister({
              user: {
                ...values,
                confirmPassword: values.password,
              },
              setLoading: setSubmitting,
            }),
          });
        }

        // Else :
      } catch (err) {
        Swal.Toast.fire({
          title: "Something went wrong",
          text: "Please try again ..",
          icon: "error"
        });
        let errors = err.inner.reduce(
          (acc, _err) => ({
            ...acc,
            [_err.path]: _err.message,
          }),
          {}
        );

        return errors;
      }
    },
    validationSchema: registerSchema
  });
  return (
    <section className="w-[400px]">
      <header className="w-full text-center mb-5 font-Worksans-SemiBold text-3xl">
        <h1>Register</h1>
        <div className="flex items-center justify-center w-full gap-1 text-sm mt-3 font-Worksans-Regular text-zinc-500">
          <span> Have an exist account?</span>
          <Link to={"/auth/login"} className="text-prime-10">
            Login
          </Link>
        </div>
      </header>
      <main>
        {/* Formik Form */}
        <form onSubmit={formik.handleSubmit}>
          <input
            className="input-element"
            placeholder="Enter the your full name.."
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <input
            className="input-element"
            placeholder="Enter the your username.."
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <input
            className="input-element"
            placeholder="Enter the your email.."
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <input
            className="input-element"
            placeholder="Enter the your phone .."
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          <input
            className="input-element"
            placeholder="Enter the your password.."
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {/* Errors */}
          <div className="mt-2">
            <Error touch={formik.touched.name} err={formik.errors.name} />
            <Error
              touch={formik.touched.username}
              err={formik.errors.username}
            />
            <Error touch={formik.touched.email} err={formik.errors.email} />
            <Error touch={formik.touched.phone} err={formik.errors.phone} />
            <Error
              touch={formik.touched.password}
              err={formik.errors.password}
            />
          </div>
          <Submit.Button title={"CONTINUE"} disabled={formik.isSubmitting} />
        </form>
      </main>
    </section>
  );
}
{
  /* <Field
                name={"name"}
                placeholder={"Enter the your full name .."}
                className="input-element"
              />
              <Field
                name={"username"}
                placeholder={"Enter the your username .."}
                className="input-element"
              />
              <Field
                name={"email"}
                placeholder={"Enter the your email address .."}
                className="input-element"
              />
              <Field
                name={"phone"}
                placeholder={"Enter the your phone number .."}
                className="input-element"
              />
              <Field
                name={"password"}
                type="password"
                placeholder={"Enter the your password .."}
                className="input-element"
              />

              <Element clickHandler={() => loginHandler({userInfos:values})}/> */
}

// if (!values.password.length) {
//   errors.password = "Password is required !";
// } else if (values.password.length < 8) {
//   errors.password = "Password must be at least 8 characters..";
// }

// if (!values.name) {
//   errors.name = "please enter the your full name ..";
// } else if (values.name.length < 5) {
//   errors.name = "Full name must be at least 5 characters..";
// }

// if (!values.username) {
//   errors.username = "Please enter a valid username ..";
// }

// const isEmailValid = await emailSchema.isValid({ email: values.email });

// if (!values.email) {
//   errors.email = "Please fill out the email address !";
// }

// if (!values.phone) {
//   errors.phone = "Please fill out the phone number .."
// } else if (values.phone.length < 11 || values.phone.length > 11) {
//   errors.phone = "Please enter a valid phone number"
// }

// if (!isEmailValid) {
//   errors.email = "Please enter a valid email address..";
// }
