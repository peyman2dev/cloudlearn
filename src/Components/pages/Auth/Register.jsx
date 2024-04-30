import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import useSubmit from "../../../Utils/Hooks/useSubmit";

export default function Register() {
  const { Element, isLoading, loginHandler, setIsLoading } = useSubmit({
    title: "REGISTER",
    action: "register"
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
        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form>
              <Field
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

              <Element clickHandler={() => loginHandler({userInfos:values})}/>
            </Form>
          )}
        </Formik>
      </main>
    </section>
  );
}
