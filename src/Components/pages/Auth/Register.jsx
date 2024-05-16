import React from "react";
import { useForm } from "react-hook-form";
import Error from "../../Reusable/Messages/Error";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../../Utils/Validations/registerSchema";
import { useDispatch } from "react-redux";
import { getRegister } from "../../../Utils/Redux/Ducks/ducks";

export default function Register() {
  const dispatch = useDispatch()
  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      phone: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const sumbitted = () => {
    console.log(getValues());
    dispatch(getRegister({
      ...getValues(),
      confirmPassword: getValues().password
    }))
  };
  return (
    <form onSubmit={handleSubmit(sumbitted)} className="form">
      <header className="w-full flex items-center justify-center flex-col gap-3">
        <h1 className="text-3xl font-Worksans-SemiBold">Register</h1>
        <p className="text-sm text-dark-40text-sm text-dark-40">
          Welcome! Glad to see you here !
        </p>
      </header>
      <main className="w-full p-6 space-y-1">
        <div>
          <label htmlFor="name">Full name:</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Full name ..."
          />
          <Error errors={errors} target={"name"} />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            {...register("username")}
            placeholder="Username ..."
          />
          <Error errors={errors} target={"username"} />
        </div>
        <div>
          <label htmlFor="phone">Phone number:</label>
          <input
            type="text"
            {...register("phone")}
            placeholder="Phone number ..."
          />
          <Error errors={errors} target={"phone"} />
        </div>
        
        {/* Email Address */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            {...register("email")}
            placeholder=" Email address ..."
          />
          <Error errors={errors} target={"email"} />
        </div>


        {/* Password */}
        <div>
          <label htmlFor="email">Password:</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Password ..."
          />
          <Error errors={errors} target={"password"} />
        </div>
        <div className="w-full mt-3">
          <button
            onSubmit={(event) => event.stopPropagation()}
            className="submit-button"
          >
            Register
          </button>
        </div>
      </main>
    </form>
  );
}
