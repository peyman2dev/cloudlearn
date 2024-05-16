import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import loginSchema from "../../../Utils/Validations/loginSchema";
import { Link } from "react-router-dom";
import Error from "../../Reusable/Messages/Error";
import { useDispatch } from "react-redux";
import { getLogin } from "../../../Utils/Redux/Ducks/ducks";

export default function Login() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const submitted = () => {
    dispatch(
      getLogin({
        identifier: getValues().identifier,
        password: getValues().password,
      })
    );
  };

  return (
    <form
      onSubmit={handleSubmit(submitted)}
      className="form"
    >
      <header className=" flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-Worksans-SemiBold">Login</h1>
        <p className="text-sm text-dark-40">
          Welcome back! Please log in to access your account.
        </p>
      </header>
      <main className="p-6 space-y-1">
        <div>
          <label htmlFor="identifier">username:</label>
          <input {...register("identifier")} placeholder="Username ..." />
          <Error errors={errors} target={"identifier"} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Password ..."
          />
          <Error errors={errors} target={"password"} />
        </div>
        <div className="flex items-center font-Worksans-Light justify-end mt-5">
          <Link>Forgot Password?</Link>
        </div>
        <div className="flex items-center select-none text-[16px!important] gap-1">
          <input
            type="checkbox"
            id="rememberme"
            className="w-4 accent-prime-10 h-4 "
          />
          <label htmlFor="rememberme">
            <span>Remember me</span>
          </label>
        </div>

        <button
          onSubmit={(event) => event.stopPropagation()}
          className="submit-button"
        >
          Login
        </button>
      </main>
      <footer>
        <div className="w-full h-px flex items-center justify-center dark:bg-white/5 bg-black/10 before:absolute before:content-['OR'] before:bg-white text-xs before:dark:bg-dark-15 before:text-zinc-400 before:px-1.5"></div>
        <div className="w-full mt-5">
          <Link className="w-full  flex gap-2 items-center justify-center py-4 rounded-md dark:bg-dark-20">
            <span>
              <img
                src="../../../../public/images/icons/google.png"
                className="w-5"
              />
            </span>
            <span>Login with google</span>
          </Link>
        </div>
        <div className="mt-4 flex items-center justify-center gap-1">
          <span>Don’t have an account?</span>
          <Link to={"/auth/register"} className="text-sky-500">
            Sign up!
          </Link>
        </div>
      </footer>
    </form>
  );
}
