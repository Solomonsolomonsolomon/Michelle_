"use client"

import { useState, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Signin.module.css";
import * as fa from "react-icons/fa";

type SigninType = {
  onClose?: () => void;
};

interface FormValues {
  emailAddress: string;
  password: string;
}

const Signin: React.FC<SigninType> = ({ onClose }) => {
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) =>
    console.log(data);

  const close = () => {
    onClose;
  };

  return (
    <>
      <div className={styles.signin}>
        <div className={styles.iconXContainer}>
          <img
            className={styles.iconX}
            alt=""
            src="/iconx.svg"
            onClick={onClose}
          />
        </div>
        <div className={styles.loginToRestaurant}>Login to Restaurant</div>
        {/* <div className={styles.linkToLogin}>
          <div
            className={styles.dontHaveAnAccount}
          >{`Don’t have an account ?? `}</div>
          <button
            className={styles.signup}
            onClick={openSignup1}
          >
            Signup
          </button>
        </div> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.login}>
            <div>
              <input
                className={styles.option}
                id="emailAddress"
                placeholder="Email Address"
                type="email"
                {...register("emailAddress", { required: true, maxLength: 50 })}
              />
              {errors.emailAddress && (
                <span>{errors.emailAddress.message}</span>
              )}
            </div>
            <div className={styles.option1}>
            <div>
              <input
                id="password"
                placeholder="Password"
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
            <div className={styles.buttonContainer}>
              <button className={styles.button} type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
        <div className={styles.forgotYourPassword}>Forgot your password?</div>
      </div>

      {/* {isSignup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignup1}
        >
          <Signup onClose={closeSignup1} />
        </PortalPopup>
      )} */}
    </>
  );
};

export default Signin;
