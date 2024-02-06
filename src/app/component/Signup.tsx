"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Signup.module.css";
import * as fa from "react-icons/fa";
import axios from "../api/axios";
import { signIn } from "next-auth/react";

type SignupType = {
  onClose?: () => void;
};

type SignUpData = {
  // firstName: string;
  // lastName: string;
  // phoneNumber: number;
  email: string;
  password: string;
  password2: string;
};

const Signup: React.FC<SignupType> = ({ onClose }) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>();

  const onSubmit: SubmitHandler<SignUpData> = async (data: SignUpData) => {
    const response = await axios.post("/auth/register", data);

    signIn();
    console.log(response);
  };

  return (
    <div className={styles.signup}>
      <div className={styles.iconXContainer}>
        <img
          className={styles.iconX}
          alt=""
          src="/iconx.svg"
          onClick={onClose}
        />
      </div>

      <div className={styles.registerToRestaurant}>Register to Restaurant</div>
      {/* <div className={styles.linkToLogin}>
        <div className={styles.gotAnAccount}>{`Got an account already?? `}</div>
        <div className={styles.signin}>Signin</div>
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.register}>
          {/* <div>
            <input
              className={styles.option1}
              id="firstName"
              placeholder="First Name"
              type="text"
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </div>
          <div>
            <input
              className={styles.option1}
              id="lastName"
              placeholder="Last Name"
              type="text"
              {...register("lastName", { required: true, maxLength: 20 })}
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </div>
          <div>
            <input
              className={styles.option1}
              id="phoneNumber"
              placeholder="Phone Number"
              type="number"
              {...register("phoneNumber", { required: true, maxLength: 11 })}
            />
            {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
          </div> */}
          <div>
            <input
              className={styles.option1}
              id="email"
              placeholder="Email Address"
              type="email"
              {...register("email", { required: true, maxLength: 50 })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className={styles.option1}>
            <div>
              <input
                id="password"
                placeholder="password"
                type={showPassword1 ? "text" : "password"}
                {...register("password", { required: true, maxLength: 20 })}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div>
              <button
                type="button"
                onClick={togglePasswordVisibility1}
                className={styles.passwordToggle}
              >
                {showPassword1 ? <fa.FaEyeSlash /> : <fa.FaEye />}
              </button>
            </div>
          </div>
          <div className={styles.option1}>
            <div>
              <input
                id="repeatPassword"
                placeholder="Repeat Password"
                type={showPassword2 ? "text" : "password"}
                {...register("password2", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.password2 && <span>{errors.password2.message}</span>}
            </div>
            <div>
              <button
                type="button"
                onClick={togglePasswordVisibility2}
                className={styles.passwordToggle}
              >
                {showPassword2 ? <fa.FaEyeSlash /> : <fa.FaEye />}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} type="submit">
            Sign Up
          </button>
        </div>
      </form>
      <div className={styles.byCreatingAnContainer}>
        {`By creating an account, you automatically accept our `}
        <a className={styles.termsOfService} href="#" target="_blank">
          <span className={styles.termsOfService1}>Terms of service,</span>
        </a>
        {` `}
        <a className={styles.termsOfService} href="#" target="_blank">
          <span className={styles.termsOfService1}>Privacy Policy</span>
        </a>
        {` and `}
        <a className={styles.termsOfService} href="#" target="_blank">
          <span className={styles.termsOfService1}>Cookies Policy</span>
        </a>
      </div>
    </div>
  );
};

export default Signup;
