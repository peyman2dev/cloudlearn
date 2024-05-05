import React from "react";
import { Link } from "react-router-dom";
import useSubmit from "../../../Utils/Hooks/useSubmit";
import { getLogin } from "../../../Utils/Redux/Ducks/ducks";
import { useForm } from "react-hook-form";
import Error from "../../Reusable/Messages/Error";

export default function Login() {
  const Submit = useSubmit();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const loginHandler = (data) => {
    const user = data;
    Submit.submitHandler(getLogin(user));
  };

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
      <form onSubmit={handleSubmit(loginHandler)}>
        <input
          {...register("identifier", {
            minLength: {
              value: 4,
              message: "Username minimum length is 4 ..",
            },
            maxLength: {
              value: 21,
              message: "Username maximum length is 21 ..",
            },
            required: "Username it's a required field ..",
          })}
          className="input-element"
          placeholder="Enter the username .."
        />
        <Error errors={errors} target="username" />
        <input
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password minimum length is 8 ...",
            },
            required: "Password it's a required field ..",
          })}
          className="input-element"
          type="password"
          placeholder="Enter the password .."
        />
        <Error errors={errors} target="password" />

        <Submit.Button title={"CONTINUE"} />
      </form>
    </section>
  );
}
