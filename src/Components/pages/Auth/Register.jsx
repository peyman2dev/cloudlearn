import React from "react";
import { Link } from "react-router-dom";
import useSubmit from "../../../Utils/Hooks/useSubmit";
import { getRegister } from "../../../Utils/Redux/Ducks/ducks";
import registerSchema from "../../../Utils/Validations/registerSchema";
import useSwal from "../../../Utils/Hooks/useSwal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Error from "../../Reusable/Messages/Error";

export default function Register() {
  const Swal = useSwal();
  const Submit = useSubmit();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    yupResolver:  registerSchema
  });

  const registerHandler = (data) => {
    const user = {
      ...data,
      confirmPassword: data.password,
    };
    console.log(user);
    Submit.submitHandler(getRegister(user));
  };

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
        <form onSubmit={handleSubmit(registerHandler)}>
          <input
            {...register("name", {
              required: "name field is required ..",
              minLength: {
                value: 5,
                message: "* name field minimum length is 5 ..",
              },
            })}
            placeholder="Please enter the full name .."
          />
          <Error errors={errors} target={"name"} />
          <input
            placeholder="Please enter the username .."
            {...register("username", {
              required: "Username field is required ..",
              minLength: {
                value: 3,
                message: "* username minimum length is 3 characters ..",
              },
              maxLength: {
                value: 21,
                message: "* username maximum length is 21 characters ..",
              },
            })}
          />
          <Error errors={errors} target={"username"} />
          <input
            placeholder="Please enter the email address .."
            {...register("email", {
              required: "Email field is a required  ...",
              pattern: {
                value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                message: "Please try a another email...",
              },
            })}
          />
          <Error errors={errors} target={"email"} />
          <input
            placeholder="Please enter the phone number .."
            {...register("phone", {
              required: "Phone number field is a required ..",
              minLength: {
                value: 11,
                message: "* phone minimum length is 11 characters ..",
              },
              maxLength: {
                value: 11,
                message: "* phone maximum length is 11 characters ..",
              },
            })}
          />
          <Error errors={errors} target={"phone"} />
          <input
            placeholder="Please enter the password .."
            type="password"
            {...register("password", {
              required: "Password field is required ...",
              minLength: {
                value: 8,
                message: "Password minimum length is 8 characters ..",
              },
            })}
          />
          <Error errors={errors} target={"password"} />

          <Submit.Button title={"CONTINUE"} />
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
