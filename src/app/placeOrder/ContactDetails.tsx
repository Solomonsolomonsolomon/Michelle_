"use client";

import Button from "../component/Button";
import styles from "./ContactDetails.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}

const ContactDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) =>
    console.log(data);

  return (
    <div className={styles.fullPage}>
      <div className={styles.contactDetails}>
        <div className={styles.contactDetailsContainer}>
          <div className={styles.title}>Contact Details</div>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.form}>
                <div className={styles.inputContainer}>
                  <input
                    className={styles.option1}
                    id="firstName"
                    placeholder="First Name"
                    type="text"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.firstName && <span>{errors.firstName.message}</span>}
                </div>
                <div className={styles.inputContainer}>
                  <input
                    className={styles.option1}
                    id="lastName"
                    placeholder="Last Name"
                    type="text"
                    {...register("lastName", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.lastName && <span>{errors.lastName.message}</span>}
                </div>
                <div className={styles.inputContainer}>
                  <input
                    className={styles.option1}
                    id="phoneNumber"
                    placeholder="Phone Number"
                    type="text"
                    {...register("phoneNumber", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.phoneNumber && (
                    <span>{errors.phoneNumber.message}</span>
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <input
                    className={styles.option1}
                    id="emailAddress"
                    placeholder="Email Address"
                    type="text"
                    {...register("emailAddress", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.emailAddress && (
                    <span>{errors.emailAddress.message}</span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.fullPriceContainer}>
          <div className={styles.totalContainer}>
            <div> Subtotal</div>
            <div> #5000</div>
          </div>
          <div className={styles.totalContainer}>
            <div> Delivery Fees</div>
            <div> #450</div>
          </div>
          <div className={styles.totalContainer}>
            <div>Including VAT</div>
            <div> #355.48</div>
          </div>
          <div className={styles.totalContainer}>
            <div> Total </div>
            <div> #11558.9</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Button>Place Order</Button>
      </div>
    </div>
  );
};

export default ContactDetails;
